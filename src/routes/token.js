import Controller from '../controllers/token'
const controller = new Controller
module.exports = function (app) {
  app.post('/token', controller.updateToken)
}
