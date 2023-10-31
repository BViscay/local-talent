const Service = require('../models/service.model')
const Category = require('../models/category.model')
const User = require('../models/user.model')
const { uploadImageCreate, deleteImageDestroy } = require('../services/image.service')
const { Sequelize, Op } = require('sequelize')

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

const findUserService = async (id) => {
  id = Number(id)
  const resultado = await Service.findAll({
    where: { userId: id }
  })
  console.log(`consulta realizada ${id}`)
  return resultado
}

const searchService = async (query) => {
  const search = query.data

  if (!isNaN(query.data)) {
    const resultado = await Service.findAll({
      where: { categoryId: search }
    })
    console.log(`consulta realizada ${search}`)
    return resultado
  } else {
    const resultado = await Service.findAll({
      where: {
        [Sequelize.Op.or]: [{
          title: { [Sequelize.Op.iLike]: `%${search}%` }
        },
        {
          description: { [Sequelize.Op.iLike]: `%${search}%` }
        }]
      }
    })
    console.log(`consulta realizada ${search}`)
    return resultado
  }
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

const allServices = async () => {
  const services = await Service.findAll()
  return services
}

module.exports = {

  createService,
  editService,
  deleteService,
  findUserService,
  searchService,

  allServices
}
