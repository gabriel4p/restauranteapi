import Controller from '../controllers/item'

const controller = new Controller()

module.exports = function (app) {
  app.get('/api/items/:id', controller.getById)
  app.get('/api/items', controller.getAll)
  app.put('/api/items', controller.update)
  app.post('/api/items', controller.create)
  app.delete('/api/items/:id', controller.delete)
}