import image from './image'
import item from './item'
import order from './order'
import token from './token'

module.exports = (app) => {
  image(app)
  item(app)
  order(app)
  token(app)
}
