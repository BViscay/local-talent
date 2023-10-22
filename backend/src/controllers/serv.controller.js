const { createService, findService, editService, findByService } = require('../services/services.service')

const ServiceCreateController = async (req, res) => {
  try {
    const result = await createService(req.body)
    res.status(200).json({ message: 'Servicio creado con exito', result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceFindController = async (req, res) => {
  try {
    const result = await findService(req.query)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceEditController = async (req, res) => {
  try {
    const result = await editService(req.body)
    res.status(200).send({ message: 'Servicio editado con exito', result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceFindByController = async (req, res) => {
  try {
    const result = await findByService(req.params)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {

  ServiceCreateController,
  ServiceFindController,
  ServiceEditController,
  ServiceFindByController

}
