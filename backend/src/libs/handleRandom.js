function generateRandomNumber () {
  const randomValue = Math.random()
  const numberInRange = randomValue * 900000
  const sixDigitNumber = Math.floor(numberInRange) + 100000
  return sixDigitNumber
}

module.exports = { generateRandomNumber }
