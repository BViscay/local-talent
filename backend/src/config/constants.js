const USER_STATUS = {
  PENDING: 0,
  VALIDATE: 1
}

const MATCH_STATUS = {
  ACCEPT: 'accept',
  QUALIFY_USER: 'qualifyUser',
  FINISHED: 'finished'

}

const MATCH_TYPES = {
  SERVICE: 'service',
  USER: 'user'
}

module.exports = { USER_STATUS, MATCH_STATUS, MATCH_TYPES }
