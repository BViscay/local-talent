const Match = require('../models/match.model')

const createMach = async (data) => {
  const newMatch = await Match.create({ ...data })
  return newMatch
}

const serviceMatch = async (id) => {
  const match = await Match.findAll({ where: { serviceId: id } })
  return match
}

const modifyMatch = async (data) => {
  console.log(data.status)
  const match = await Match.update(data, { where: { id: data.id } })

  return match
}

module.exports = {
  createMach,
  serviceMatch,
  modifyMatch

}
