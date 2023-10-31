const Match = require('../models/match.model')
const Service = require('../models/service.model')

const createMach = async (data) => {
  const newMatch = await Match.create({ ...data })
  return newMatch
}

const serviceMatch = async (userId) => {
  const match = await Match.findAll({
    include: { model: Service, where: { userId } }
  })

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
