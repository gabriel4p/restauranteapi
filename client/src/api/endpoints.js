export const API_ENDPOINT = '/api'

export const ORDERS = 'orders'
export const ITEM = 'item'
export const ITEMS = 'items'

export const resources = {
  [ORDERS]: () => `${API_ENDPOINT}/${ORDERS}`,
  [ITEMS]: () => `${API_ENDPOINT}/${ITEMS}`,
  [ITEM]: (id) => `${API_ENDPOINT}/${ITEMS}/${id}`
}
