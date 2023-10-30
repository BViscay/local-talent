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
   console.log(subscription)
    return subscription.data
  }

  async createSubscriptionSilver () {
    const url = 'https://api.mercadopago.com/preapproval'

    const body = {
      reason: 'Subscription Silver',
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: 100,
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
}

module.exports = PaymentService
