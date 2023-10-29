const Match = require('../models/match.model')

const createMach = async (data) => {
  console.log(data)

  const newMatch = await Match.create({ ...data })
  return newMatch
}

module.exports = {
  createMach

}
