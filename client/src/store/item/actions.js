import * as types from './action-types.js'
import { getItem } from '../../api/item.js'

export function getItemAction (id) {
  return dispatch => {
    dispatch({
      type: types.GET_ITEM_REQUEST
    })

    return getItem(id)
      .then((item) => {
        dispatch({
          type: types.GET_ITEM_SUCCESS,
          item
        })
      })
      .catch(e => {
        dispatch({
          type: types.GET_ITEM_FAILURE,
          errorMessage: e.errors
        })
      })
  }
}
