const axios = require('axios')

class PaymentService {
  async createSubscriptionGold () {
    const url = 'https://api.mercadopago.com/preapproval'

    const body = {
      reason: 'Subscription Gold',
      auto_recurring: {
        frequency: 3,
        frequency_type: 'months',
        transaction_amount: 250,
        currency_id: 'ARS'
      },
      back_url: 'https://google.com.ar',
      payer_email: 'test_user_1662266079@testuser.com'
    }

    const subscription = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    })
    return subscription.data
  }

  async createSubscriptionSilver (user_id, product_id) {
    const url = 'https://api.mercadopago.com/preapproval'

    const body = {
      reason: 'Subscription Silver',
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: 100,
        currency_id: 'ARS'
      },
      back_url: `https://3281-167-58-61-245.ngrok-free.app/api/pay/success/${user_id}/${product_id}`,
      payer_email: 'test_user_1662266079@testuser.com'
    }

    const subscription = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    })

    return subscription.data
  }

  async cancelSubscription (subscriptionId) {
    try {
      const url = `https://api.mercadopago.com/preapproval/${subscriptionId}`
      const newStatus = 'cancelled' // Cambia a 'paused' si deseas pausar en lugar de cancelar

      const response = await axios.put(url, { status: newStatus }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}` // Reemplaza con tu token de acceso real
        }
      })

      return response.data
    } catch (error) {
      console.error('Error al cancelar la suscripción:', error)
      throw error // Puedes manejar los errores según tu caso específico
    }
  }
}

module.exports = PaymentService
