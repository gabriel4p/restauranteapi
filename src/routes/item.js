import Controller from '../controllers/item'

const controller = new Controller()

module.exports = function (app) {

  app.get('/item/:id', controller.getById)

  app.get('/item', controller.getAll)
  app.put('/item', controller.update)
  app.post('/item', controller.create)
  app.delete('/item/:id', controller.delete)
}