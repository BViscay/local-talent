const {
  createService,
  editService,
  deleteService,
  findUserServices,
  searchService, allServices
} = require('../services/services.service')

const ServiceCreateController = async (req, res) => {
  try {
    const { userId } = req.headers.session

    const result = await createService({ userId, ...req.body }, req.files)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const CreateRatingService = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const { id } = req.params
    const match = await 
    const result = await createService({ userId, ...req.body }, req.files)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const findUserServicesController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await findUserServices(userId)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceEditController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await editService({ id, ...req.body })
    res.status(200).send({ message: 'Servicio editado con exito', result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceSearchController = async (req, res) => {
  try {
    const result = await searchService(req.query)
    res.status(200).send(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceDeleteController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await deleteService(id)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceFindALLController = async (req, res) => {
  try {
    const result = await allServices()
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const deleteServiceController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await deleteService(id)
    res.status(200).json({ message: result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {

  ServiceCreateController,
  findUserServicesController,
  ServiceEditController,
  ServiceSearchController,
  ServiceDeleteController,
  ServiceFindALLController,
<<<<<<< HEAD
  CreateRatingService

=======
  deleteServiceController
>>>>>>> 48e9488b45360c8a3254d3da8880753bb2c3d6c9
}
