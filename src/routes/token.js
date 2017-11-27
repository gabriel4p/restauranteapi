import HttpStatus from 'http-status'
import config from '../config'
const configServer = config[process.env.NODE_ENV]
const permissionToken = configServer.serverToken

const user = { name: configServer.userName, password: configServer.userPassword }

module.exports = function (app) {

  app.post('/token', (req, res) => {
    if (user.name == req.body.name && user.password == req.body.password) {
      res.json(permissionToken)
    } else {
      res.status(HttpStatus.UNAUTHORIZED)
      res.end('Unauthorized.')
    }
  })
}