class PaymentController {
  constructor (subscriptionService) {
    this.subscriptionService = subscriptionService
  }

  async getSubscriptionLinkSilver (req, res) {
    const { userId } = req.headers.session
    try {
      const subscription = await this.subscriptionService.createSubscriptionSilver(userId)

      return res.json(subscription)
    } catch (error) {
      console.log(error)

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to created subscription' })
    }
  }

  async getSubscriptionLinkGold (req, res) {
    const { userId } = req.headers.session
    try {
      const subscription = await this.subscriptionService.createSubscriptionGold(userId)

      return res.json(subscription)
    } catch (error) {
      console.log(error)

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to created subscription' })
    }
  }

  async cancelSubscription (req, res) {
    try {
      const subscription = await this.subscriptionService.createSubscriptionSilver()
      const subscriptionId = subscription.id // Captura el ID de la suscripción
      console.log(subscriptionId, 'codigo suscripcion')

      const response = await this.subscriptionService.cancelSubscription(subscriptionId)

      return res.json(response)
    } catch (error) {
      console.error(error)

      return res.status(500).json({ error: true, msg: 'Failed to cancel or pause subscription' })
    }
  }
}

module.exports = PaymentController
