const Service = require('../models/service.model')
const Category = require('../models/category.model')
const User = require('../models/user.model')
const { uploadImageCreate, deleteImageDestroy } = require('../services/image.service')
const { Op } = require('sequelize')

const createService = async (data, dataImg) => {
  const resultImage = await uploadImageCreate(dataImg)

  //! PROVISORIO
  data.categoryId = parseInt(data.categoryId)
  console.log(data.categoryId)

  console.log(data.categoryId)

  const newService = await Service.create({
    userId: data.userId,
    image: resultImage,
    title: data.title,
    categoryId: data.categoryId,
    description: data.description,
    price: data.price,
    city: data.city,
    latitude: data.latitude,
    longitude: data.longitude
  })

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
  return await Service[method]({
    where,
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
    where: { id }
  })
}

const deleteService = async (id) => {
  console.log(id)
  // const destroyImagen = await Service.findOne({ where: { id } })
  await Service.destroy({ where: { id } })
  // const destroyImage = await deleteImageDestroy(destroyImagen.image_public_id)
  // return destroyImage
}

const allServices = async () => await findServiceWhere()

module.exports = {

  createService,
  editService,
  deleteService,
  findUserServices,
  searchService,
  allServices,
  findServiceWhere
}
