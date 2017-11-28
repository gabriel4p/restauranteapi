import * as types from './action-types.js'
import {
  getItem,
  postItem
} from '../../api/item.js'

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

export function postItemAction (item) {
  return dispatch => {
    dispatch({
      type: types.POST_ITEM_REQUEST
    })

    return postItem(item)
      .then((newItem) => {
        dispatch({
          type: types.POST_ITEM_SUCCESS,
          newItem
        })
      })
      .catch(e => {
        dispatch({
          type: types.POST_ITEM_FAILURE,
          errorMessage: e.errors
        })
      })
  }
}
