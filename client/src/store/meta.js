export const REQUEST_STATUS_INITIAL = {
  loading: false,
  success: false,
  fail: false
}

export const REQUEST_STATUS_LOADING = {
  loading: true,
  success: false,
  fail: false
}

export const REQUEST_STATUS_SUCCESS = {
  loading: false,
  success: true,
  fail: false
}

export const REQUEST_STATUS_FAIL = {
  loading: false,
  success: false,
  fail: true,
  errorMessage: ''
}
