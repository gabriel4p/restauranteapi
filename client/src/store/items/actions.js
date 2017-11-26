import * as types from './action-types.js'
import { getItems } from '../../api/items.js'

export function getItemsAction () {
  return dispatch => {
    dispatch({
      type: types.GET_ITEMS_REQUEST
    })

    return getItems()
      .then(({ items }) => {
        dispatch({
          type: types.GET_ITEMS_SUCCESS,
          items
        })
      })
      .catch(e => {
        dispatch({
          type: types.GET_ITEMS_FAILURE,
          errorMessage: e.errors
        })
      })
  }
}
