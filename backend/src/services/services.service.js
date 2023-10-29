const Service = require('../models/service.model')
const Category = require('../models/category.model')
const { uploadImageCreate, deleteImageDestroy } = require('../services/image.service')
const { Sequelize, Op } = require('sequelize');

const createService = async (data, dataImg) => {

  const resultImage = await uploadImageCreate(dataImg)

  //! PROVISORIO
  data.categoryId = parseInt(data.categoryId)


  const newService = await Service.create({
    ...data,
    image: resultImage
  })
  //newService["userId"] = data.userId;
  //newService["categoryId"] = data.categoryId;
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

const allServices = async () => await Service.findAll()


module.exports = {

  createService,
  editService,
  deleteService,
  findUserService,
  searchService,

  allServices
}
