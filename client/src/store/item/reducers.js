import * as meta from '../meta.js'
import * as types from './action-types.js'

const initialItemState = {
  requestStatus: meta.REQUEST_STATUS_INITIAL,
  item: []
}

export const item = (state = initialItemState, action) => {
  switch (action.type) {
    case types.GET_ITEM_REQUEST:
      state.requestStatus = meta.REQUEST_STATUS_LOADING
      return { ...state }
    case types.GET_ITEM_SUCCESS:
      state.item = action.item
      state.requestStatus = meta.REQUEST_STATUS_SUCCESS
      return { ...state }
    case types.GET_ITEM_FAILURE:
      state.requestStatus = meta.REQUEST_STATUS_FAIL
      state.requestStatus.errorMessage = action.errorMessage
      return { ...state }
    default:
      return state
  }
}

const initialNewItemState = {
  requestStatus: meta.REQUEST_STATUS_INITIAL,
  newItem: []
}

export const newItem = (state = initialNewItemState, action) => {
  switch (action.type) {
    case types.POST_ITEM_REQUEST:
      state.requestStatus = meta.REQUEST_STATUS_LOADING
      return { ...state }
    case types.POST_ITEM_SUCCESS:
      state.newItem = action.newItem
      state.requestStatus = meta.REQUEST_STATUS_SUCCESS
      return { ...state }
    case types.POST_ITEM_FAILURE:
      state.requestStatus = meta.REQUEST_STATUS_FAIL
      state.requestStatus.errorMessage = action.errorMessage
      return { ...state }
    default:
      return state
  }
}
