import Controller from '../controllers/order'

const controller = new Controller()

module.exports = function (app) {
  app.get('/api/orders', controller.getAll)
  app.get('/api/orders/:id', controller.getById)
  app.post('/api/orders', controller.create)
  app.delete('/api/orders/:id', controller.delete)
  app.post('/api/orders/ok', controller.ok)
}