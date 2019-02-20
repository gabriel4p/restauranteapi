import Controller from '../controllers/image'
import Multer from 'multer'

const _5MB = 5 * 1024 * 1024

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: _5MB
  }
})

const controller = new Controller()

module.exports = function (app) {
  app.get('/image/:name', controller.get)

  app.post('/image', multer.single('file'), controller.createImage)
}
