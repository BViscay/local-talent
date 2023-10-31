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

const findUserService = async (data) => {
  if (data.id_services) {
    console.log('consulta por servicio')
    const resultado = await Service.findAll({ where: { id: data.id_services } })
    return consultaHardCode(resultado)
  }
  const id = Number(data.userId)
  if (id) {
    console.log('consulta por usuario')
    const resultado = await Service.findAll({ where: { userId: id } })
    console.log(`consulta realizada ${id}`, resultado)
    return consultaHardCode(resultado)
  }
}

const searchService = async (query) => {
  const search = query.data
  console.log(search)

  if (!isNaN(query.data)) {
    const resultado = await Service.findAll({
      where: { categoryId: search }
    })
    console.log(`consulta realizada ${search}`)
    return consultaHardCode(resultado)
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
    return consultaHardCode(resultado)
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
  // const services = await Service.findAll({ include: [{ model: User, as: 'user', through: { attributes: ['firstname'] } }] })

  const services = await Service.findAll()

  return consultaHardCode(services)
}

const consultaHardCode = async (services) => {
  const users = await User.findAll()
  const categories = await Category.findAll()
  services = services.map((ser) => {
    const categoryService = categories.filter(cat => parseInt(cat.id) === parseInt(ser.categoryId))
    const categoryName = categoryService[0].dataValues.name
    const userNameService = users.filter(use => parseInt(use.id) === parseInt(ser.userId))
    const userFirstname = userNameService[0].dataValues.firstname
    const userLastname = userNameService[0].dataValues.lastname
    ser.categoryId = { id: ser.categoryId, name: categoryName }
    ser.userId = { id: ser.userId, firstName: userFirstname, lastName: userLastname }
    return ser
  })
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
