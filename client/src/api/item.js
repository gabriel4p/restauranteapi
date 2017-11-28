import axios from 'axios'

import {
  ITEM,
  ITEMS,
  resources
} from './endpoints.js'

export const getItem = (id) => {
  const endpoint = resources[ITEM](id)

  return axios.get(endpoint).then(({ data }) => data)
}

export const postItem = (item) => {
  const endpoint = resources[ITEMS]()

  console.log(item)

  return axios.post(endpoint, item).then(({ data }) => data)
}
