const { transproter } = require('../config/mailer')

const sendRegisterNotification = async ({ email, validator }) => {
  await transproter.sendMail({
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

const sendWelcomeMessage = async ({ email }) => {
  await transproter.sendMail({
    from: `"Local Talent" <${process.env.SMTP_ACCOUNT}>`,
    to: email,
    subject: 'Bienvenido a LOCAL TALENT',
    html: `
            <h2>Ya podes acceder a tu cuenta</h2>
        `
  })
}

const sendCreateMatch = async ({ email, serviceTitle, userFullName, message }) => {
  await transproter.sendMail({
    from: `"Local Talent" <${process.env.SMTP_ACCOUNT}>`,
    to: email,
    subject: 'Tienes un nuevo MATCH!!!',
    html: `
            <h2>Hola ${userFullName}!!!</h2>
            <h3>Han realizado un nuevo MATCH en tu servicio ${serviceTitle}: </h3>
            <h3>${message} </h3>
            <h3>Accede a tu cuenta para concretar la oportunidad...</h3>
        `
  })
}

module.exports = {
  sendRegisterNotification,
  sendWelcomeMessage,
  sendCreateMatch
}
