import image from './image'
import item from './item'
import order from './order'

module.exports = (app) => {
  image(app)
  item(app)
  order(app)
}