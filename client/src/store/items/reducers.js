import * as meta from '../meta.js'
import * as types from './action-types.js'

const initialState = {
  requestStatus: meta.REQUEST_STATUS_INITIAL,
  items: []
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS_REQUEST:
      state.requestStatus = meta.REQUEST_STATUS_LOADING
      return { ...state }
    case types.GET_ITEMS_SUCCESS:
      state.items = action.items
      state.requestStatus = meta.REQUEST_STATUS_SUCCESS
      return { ...state }
    case types.GET_ITEMS_FAILURE:
      state.requestStatus = meta.REQUEST_STATUS_FAIL
      state.requestStatus.errorMessage = action.errorMessage
      return { ...state }
    default:
      return state
  }
}

export default items
