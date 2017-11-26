import axios from 'axios'

import {
  ORDERS,
  resources
} from './endpoints.js'

export const getOrders = () => {
  const endpoint = resources[ORDERS]()

  return axios.get(endpoint).then(({ data }) => data)
}
