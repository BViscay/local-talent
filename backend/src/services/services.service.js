const Service = require('../models/service.model')
const Category = require('../models/category.model')
const { uploadImageCreate, deleteImageDestroy } = require('../services/image.service')
const { Sequelize, Op } = require('sequelize');

const createService = async (data, dataImg) => {
  
  //ORIGINAL
    // const resultImage = await uploadImageCreate(dataImg)

    // data.imageId = resultImage.public_id
    // data.image = resultImage.secure_url

  // PROVISIONAL DIEGO
      const resultImage = { imageId:"Provisional Diego" ,  image:"Provisional Diego"}
        data.imageId = resultImage.public_id
        data.image = resultImage.secure_url


  //! PROVISORIO
  data.CategoryId = Number(data.CategoryId)

  const newService = await Service.create({
    ...data,
    image_public_id: resultImage.public_id,
    image: resultImage.secure_url
  })
  return newService
}

// ANTIGUA ANDREStrae todos lo servicios si no se consulta nada, si se consulta por titulo trae las coincidencias
// const findService = async () => {
//   // const { title } = consult
//   const allServices = await Service.findAll({
//     // attributes: ['user_id', 'category_id', 'title', 'description', 'image', 'price', 'city', 'latitude', 'longitude', 'score', 'rating', 'status'],
//     include: [{
//       model: Category,
//       attributes: ['name']
//     }]
//   })

//   const ServicesEdited = allServices.map(service => {
//     service = { ...service.toJSON(), category: service.category.name }
//     return (service)
//   })

//   // Verifica si hay busqueda por titulo
//   // if (!title) { return ServicesEdited } else {
//   //   ServicesEdited = ServicesEdited.filter(services => services.title.toLowerCase().includes(title.toLowerCase()))
//   //   return ServicesEdited
//   // }

//   // if (!allServices) throw Error('vacio')

//   return ServicesEdited
// }

// Insercion Diego

const findUserService = async (id) => {
  id = Number(id)
  const resultado = await Service.findAll({
    where: { userId: id }
  })
  console.log(`consulta realizada ${id}`)
  return resultado 
}

// Insercion Diego
const searchService = async (query) => {
  const search = query.data 

  if(!isNaN(query.data)){
    const resultado = await Service.findAll({
      where: { categoryId: search }
    })
    console.log(`consulta realizada ${search}`)
    return resultado 
  }

  else{

    const resultado = await Service.findAll({
      where: {
        [Sequelize.Op.or]: [{
            title: {
              [Sequelize.Op.iLike]: `%${search}%`}
            },
          { description: {
              [Sequelize.Op.iLike]: `%${search}%` }
          }]
      }
    });
    console.log(`consulta realizada ${search}`)
    return resultado 
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

// Cambiado porque ya no se usa (por DIEGO)
// const findByService = async (consult) => {
//   const categoria = parseInt(consult.serviceCategory)
//   const allServices = await Service.findAll({
//     attributes: ['user_id', 'category_id', 'title', 'description', 'image_public_id', 'image', 'price', 'city', 'latitude', 'longitude', 'score', 'rating', 'status'],
//     include: [{
//       model: Category,
//       attributes: ['name']
//     }]
//   })
//   const ServicesEdited = allServices.map(service => {
//     service = { ...service.toJSON(), category: service.category.name }
//     return service
//   })
//   const findServiceBy = ServicesEdited.filter(service => service.category_id === categoria)

//   return findServiceBy
// }

const deleteService = async (id) => {
  console.log(id)
  const destroyImagen = await Service.findOne({ where: { id } })
  await Service.destroy({ where: { id } })
  const destroyImage = await deleteImageDestroy(destroyImagen.image_public_id)
  return destroyImage
}

module.exports = {

  createService,
  //findService, //edicion diego
  editService,
  // findByService, Ya no se usa (DIEGO)
  deleteService,
  //Cambios edicion diego
  findUserService,
  searchService
}
