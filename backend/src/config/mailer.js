const nodemailer = require('nodemailer')

const smtpService = process.env.SMTP_SERVICE
const smtpAccount = process.env.SMTP_ACCOUNT
const smtpPassword = process.env.SMTP_PASSWORD

const transproter = nodemailer.createTransport({
  service: smtpService,
  auth: {
    user: smtpAccount,
    pass: smtpPassword
  }
})

module.exports = { transproter }
