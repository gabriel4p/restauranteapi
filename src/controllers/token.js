import { Token } from '../infra/db'

export default class Controller {
  updateToken(req, res) {
    const oldToken = req.body.oldToken
    const newToken = req.body.newToken
    if (!newToken) {
      res.end('Informe os tokens.')
      return
    }

    Token.findOne({ where: { token: newToken } })
      .then(newTokenDb => {
        if (newTokenDb)
          res.end('O token já está atualizado.')
        else if (oldToken)
          Token.findOne({ where: { token: oldToken } })
            .then(token => {
              if (token)
                Token.update({ token: newToken }, { where: { token: oldToken } })
                  .then(() => {
                    res.end('O token foi atualizado.')
                  }).catch((e) => { throw e })
              else
                Token.create({ token: newToken })
                  .then(() => {
                    res.end('O token foi criado.')
                  }).catch((e) => { throw e })
            })
            .catch(err => {
              res.end('ItemController.getAll() => ' + err.message)
            })
        else
          Token.create({ token: newToken })
            .then(() => {
              res.end('O token foi criado.')
            }).catch((e) => { throw e })
      })
      .catch(err => {
        res.end('ItemController.getAll() => ' + err.message)
      })
  }
}