import { combineReducers } from 'redux'

import orders from './orders/reducers'
import item from './item/reducers'
import items from './items/reducers'

export default combineReducers({
  item,
  items,
  orders
})
