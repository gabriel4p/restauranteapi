import { Token } from '../infra/db'

export default class Controller {
  updateToken(req, res) {
    const oldToken = req.body.oldToken
    const newToken = req.body.newToken
    if (!newToken) {
      res.end('Informe os tokens.')
      return
    }

    if (oldToken) {
      Token.findOne({ where: { token: oldToken } })
        .then(token => {
          if (token)
            Token.update({ token: newToken }, { where: { token: oldToken } })
              .then(() => {
                res.end('Token atualizado.')
              }).catch((e) => { throw e })
          else
            Token.create({ token: newToken })
              .then(() => {
                res.end('Token criado.')
              }).catch((e) => { throw e })
        })
        .catch(err => {
          res.end('ItemController.getAll() => ' + err.message)
        })
    } else {
      Token.findOne({ where: { token: newToken } })
        .then(token => {
          if (token)
                res.end('O token já está atualizado.')
          else
            Token.create({ token: newToken })
              .then(() => {
                res.end('Token criado.')
              }).catch((e) => { throw e })
        })
        .catch(err => {
          res.end('ItemController.getAll() => ' + err.message)
        })
    }
  }
}