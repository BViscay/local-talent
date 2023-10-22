const Service = require('../models/service.model')
const Category = require('../models/category.model')

const createService = async (data) => {
  const { user_id, category_id, title, description, image, price, city, latitude, longitude, score, rating, status } = data

  // Creamos un nuevo servicio
  const newService = Service.create({ user_id, category_id, title, description, image, price, city, latitude, longitude, score, rating, status })
  return newService
}

// trae todos lo servicios si no se consulta nada, si se consulta por titulo trae las coincidencias
const findService = async (consult) => {
  const { title } = consult
  const allServices = await Service.findAll({
    attributes: ['user_id', 'category_id', 'title', 'description', 'image', 'price', 'city', 'latitude', 'longitude', 'score', 'rating', 'status'],
    include: [{
      model: Category,
      attributes: ['name']
    }]
  })

  let ServicesEdited = allServices.map(service => {
    service = { ...service.toJSON(), category: service.category.name }
    return (service)
  })

  // Verifica si hay busqueda por titulo
  if (!title) { return ServicesEdited } else {
    ServicesEdited = ServicesEdited.filter(services => services.title.toLowerCase().includes(title.toLowerCase()))
    return ServicesEdited
  }
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
    attributes: ['user_id', 'category_id', 'title', 'description', 'image', 'price', 'city', 'latitude', 'longitude', 'score', 'rating', 'status'],
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

module.exports = {

  createService,
  findService,
  editService,
  findByService

}
