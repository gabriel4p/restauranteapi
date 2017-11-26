import axios from 'axios'

import {
  ITEMS,
  resources
} from './endpoints.js'

export const getItems = () => {
  const endpoint = resources[ITEMS]()

  return axios.get(endpoint).then(({ data }) => data)
}
