class PaymentController {
  constructor (subscriptionService) {
    this.subscriptionService = subscriptionService
  }

  async getSubscriptionLinkSilver (req, res) {
    try {
      const subscription = await this.subscriptionService.createSubscriptionSilver()

      return res.json(subscription)
    } catch (error) {
      console.log(error)

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to created subscription' })
    }
  }

  async getSubscriptionLinkGold (req, res) {
    try {
      const subscription = await this.subscriptionService.createSubscriptionGold()

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
