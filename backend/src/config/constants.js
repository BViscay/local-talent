const USER_STATUS = {
  PENDING: 0,
  VALIDATE: 1,
  DISABLE: 2
}

const MATCH_STATUS = {
  CANCEL: 'cancel',
  CREATE: 'create',
  ACCEPT: 'accept',
  QUALIFY_USER: 'qualifyUser',
  FINISHED: 'finished'

}

const MATCH_TYPES = {
  SERVICE: 'service',
  USER: 'user'
}

const PRODUCTS_TYPES = {
  SILVER: 1,
  GOLD: 2,
  NO_SUBSCRIPTION: null
}

module.exports = { USER_STATUS, MATCH_STATUS, MATCH_TYPES, PRODUCTS_TYPES }
