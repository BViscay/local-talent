const Service = require('../models/service.model')
const Category = require('../models/category.model')
const { uploadImageCreate, deleteImageDestroy } = require('../services/image.service')

const createService = async (data, dataImg) => {
  /* eslint-disable */
  const { user_id, category_id, title, description, price, city, latitude, longitude, score, rating, status } = data
  /* eslint-enable */
  const resultImage = await uploadImageCreate(dataImg)

  const newService = await Service.create({
    /* eslint-disable */
    user_id,
    category_id,
    /* eslint-enable */
    title,
    description,
    image_public_id: resultImage.public_id,
    image_secure_url: resultImage.secure_url,
    price,
    city,
    latitude,
    longitude,
    score,
    rating,
    status
  })

  return newService
}

// trae todos lo servicios si no se consulta nada, si se consulta por titulo trae las coincidencias
const findService = async () => {
  // const { title } = consult
  const allServices = await Service.findAll({
    // attributes: ['user_id', 'category_id', 'title', 'description', 'image', 'price', 'city', 'latitude', 'longitude', 'score', 'rating', 'status'],
    include: [{
      model: Category,
      attributes: ['name']
    }]
  })

  const ServicesEdited = allServices.map(service => {
    service = { ...service.toJSON(), category: service.category.name }
    return (service)
  })

  // Verifica si hay busqueda por titulo
  // if (!title) { return ServicesEdited } else {
  //   ServicesEdited = ServicesEdited.filter(services => services.title.toLowerCase().includes(title.toLowerCase()))
  //   return ServicesEdited
  // }

  // if (!allServices) throw Error('vacio')

  return ServicesEdited
}

const editService = async (data) => {
  const { id } = data

  // Editar un servicio existente
  console.log(data)
  Service.update(data, {
    where: { id }
  })
}

const findByService = async (consult) => {
  const categoria = parseInt(consult.serviceCategory)
  const allServices = await Service.findAll({
    attributes: ['user_id', 'category_id', 'title', 'description', 'image_public_id', 'image_secure_url', 'price', 'city', 'latitude', 'longitude', 'score', 'rating', 'status'],
    include: [{
      model: Category,
      attributes: ['name']
    }]
  })
  const ServicesEdited = allServices.map(service => {
    service = { ...service.toJSON(), category: service.category.name }
    return service
  })
  const findServiceBy = ServicesEdited.filter(service => service.category_id === categoria)

  return findServiceBy
}

const deleteService = async (id) => {
  console.log(id)
  const destroyImagen = await Service.findOne({ where: { id } })
  await Service.destroy({ where: { id } })
  const destroyImage = await deleteImageDestroy(destroyImagen.image_public_id)
  return destroyImage
}

module.exports = {

  createService,
  findService,
  editService,
  findByService,
  deleteService

}
