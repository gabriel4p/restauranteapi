import * as types from './action-types.js'
import { getOrders } from '../../api/orders.js'

export function getOrdersAction () {
  return dispatch => {
    dispatch({
      type: types.GET_ORDERS_REQUEST
    })

    return getOrders()
      .then(({ orders }) => {
        dispatch({
          type: types.GET_ORDERS_SUCCESS,
          orders
        })
      })
      .catch(e => {
        dispatch({
          type: types.GET_ORDERS_FAILURE,
          errorMessage: e.errors
        })
      })
  }
}
