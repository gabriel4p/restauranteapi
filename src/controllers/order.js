import fs from 'fs'
import path from 'path'
import HttpStatus from 'http-status'
import sha1 from 'sha1'

export default class Controller {
  getAll (req, res) {
    res.json({
      orders: [
        {
          id: 1,
          items: 10,
          value: 200
        },
        {
          id: 2,
          items: 10,
          value: 200
        },
        {
          id: 3,
          items: 10,
          value: 200
        },
        {
          id: 4,
          items: 10,
          value: 200
        }
      ]
    })
  }
}
