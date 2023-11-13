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
}

module.exports = PaymentController
