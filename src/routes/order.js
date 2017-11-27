import Controller from '../controllers/order'

const controller = new Controller()

module.exports = function (app) {

  app.get('/api/orders', controller.getAll)
}