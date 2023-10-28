const { createService, editService, deleteService } = require('../services/services.service')

const ServiceCreateController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await createService({ userId, ...req.body }, req.files)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceFindController = async (req, res) => {
  try {
    /*
    const result = await findService() */
    res.status(200).json(req.query)
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

const ServiceSearchController = async (req, res) => {
  try {
    // const result = await findByService()
    res.status(200).send(req.query)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceDeleteController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await deleteService(id)
    res.status(200).json({ message: 'Servicio eliminado', result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {

  ServiceCreateController,
  ServiceFindController,
  ServiceEditController,
  ServiceSearchController,
  ServiceDeleteController

}
