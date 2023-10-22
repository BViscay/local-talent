const { transproter } = require('../config/mailer')

const sendRegisterNotification = ({ email, validator }) => {
  transproter.sendMail({
    from: `"Local Talent" <${process.env.SMTP_ACCOUNT}>`,
    to: email,
    subject: 'Confirmación de registro',
    html: `
            <h3>ACTIVA TU CUENTA</h3>
            <h4>Codigo de activación</h4>
            <h3>${validator}</h3>
        `
  })
  return true
}

const sendWelcomeMessage = ({ email }) => {
  transproter.sendMail({
    from: `"Local Talent" <${process.env.SMTP_ACCOUNT}>`,
    to: email,
    subject: 'Bienvenido a LOCAL TALENT',
    html: `
            <h2>Ya podes acceder a tu cuenta</h2>
        `
  })
}

module.exports = { sendRegisterNotification, sendWelcomeMessage }
