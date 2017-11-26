import * as meta from '../meta.js'
import * as types from './action-types.js'

const initialState = {
  requestStatus: meta.REQUEST_STATUS_INITIAL,
  orders: []
}

const orders = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDERS_REQUEST:
      state.requestStatus = meta.REQUEST_STATUS_LOADING
      return { ...state }
    case types.GET_ORDERS_SUCCESS:
      state.orders = action.orders
      state.requestStatus = meta.REQUEST_STATUS_SUCCESS
      return { ...state }
    case types.GET_ORDERS_FAILURE:
      state.requestStatus = meta.REQUEST_STATUS_FAIL
      state.requestStatus.errorMessage = action.errorMessage
      return { ...state }
    default:
      return state
  }
}

export default orders
