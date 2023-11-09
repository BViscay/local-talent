const Service = require('../models/service.model')
const Category = require('../models/category.model')
const User = require('../models/user.model')
const Rating = require('../models/rating.model')

const { uploadImageCreate } = require('../services/image.service')
const { Op, Sequelize } = require('sequelize')
const { MATCH_TYPES } = require('../config/constants')

const createService = async (data, dataImg) => {
  const resultImage = await uploadImageCreate(dataImg)

  data.categoryId = parseInt(data.categoryId)
  data.image = resultImage

  console.log(data)

  const newService = await Service.create(data)

  return newService
}

const findUserServices = async (userId) => await findServiceWhere({ userId })

const searchService = async (query) => {
  let where
  let method = 'findAll'

  if (query?.serviceId) {
    method = 'findOne' // Si busco por serviceId cambio el método de busqueda
    where = { id: query.serviceId }
  }

  if (query?.categoryId) where = { categoryId: Number(query.categoryId) }
  if (query?.userId) where = { userId: Number(query.userId) }
  if (query?.text) {
    where = {
      [Op.or]: [
        {
          title: {
            [Op.iLike]: `%${query.text}%`
          }
        },
        {
          description: {
            [Op.iLike]: `%${query.text}%`
          }
        }
      ]
    }
  }

  if (!where) throw new Error('INVALID_QUERY')

  return await findServiceWhere(where, method)
}

const findServiceWhere = async (where, method = 'findAll') => {
  where = { ...where, status: 0 } // status = 0 => AVTIVO BORRADO LOGICO
  return await Service[method]({
    where,
    attributes: { exclude: 'status' },
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['name', 'description']
      },
      {
        model: User,
        as: 'user',
        attributes: ['firstname', 'lastname', 'email']
      }
    ]
  })
}

const editService = async (data) => {
  const { id } = data
  await Service.update(data, {
    where: { id, status: 0 }
  })
}

const deleteService = async (id) => {
  const result = await Service.update({ status: 2 }, { where: { id, status: 0 } })
  if (result[0] === 0) throw new Error('SERVICE_NOT_FOUND')
  return true
}

const allServices = async () => await findServiceWhere()

const updateScoreService = async (id) => {
  await Rating.findOne({
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('calificacion')), 'score'],
      [Sequelize.fn('COUNT', Sequelize.col('calificacion')), 'ratings']
    ],
    where: {
      type: MATCH_TYPES.SERVICE,
      refId: id
    }
  })

  return true
}

module.exports = {

  createService,
  editService,
  deleteService,
  findUserServices,
  searchService,
  allServices,
  findServiceWhere,
  updateScoreService
}
