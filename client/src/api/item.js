import axios from 'axios'

import {
  ITEM,
  resources
} from './endpoints.js'

export const getItem = (id) => {
  const endpoint = resources[ITEM](id)

  return axios.get(endpoint).then(({ data }) => data)
}
