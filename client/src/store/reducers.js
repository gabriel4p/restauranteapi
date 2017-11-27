import { combineReducers } from 'redux'

import orders from './orders/reducers'
import {
  item,
  newItem
} from './item/reducers'
import items from './items/reducers'

export default combineReducers({
  item,
  newItem,
  items,
  orders
})
