const { createService, editService, deleteService, findUserService, searchService, allServices } = require('../services/services.service')

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
    const { userId } = req.headers.session
    const result = await findUserService({ userId, ...req.query })
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
    // Angel Suarez
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

module.exports = {

  ServiceCreateController,
  ServiceFindController,
  ServiceEditController,
  ServiceSearchController,
  ServiceDeleteController,

  ServiceFindALLController

}
