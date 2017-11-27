import fs from 'fs'
import path from 'path'
import HttpStatus from 'http-status'
import sha1 from 'sha1'
import { Item } from '../infra/db'

const categories = ['comida', 'bebida', 'sobremesa']

const validation = (item) => {
  let msg = ''
  if (categories.indexOf(item.category) == -1) msg = 'A categoria é inválida'
  if (!item.description) msg = 'Descrição inválida'
  if (!item.name) msg = 'Nome inválido'
  if (!item.value) msg = 'O valor do item é inválido'
  return msg
}

export default class Controller {

  getAll(req, res) {
    Item.findAll()
      .then(result => { res.json({items: result}) })
      .catch(err => {
        res.status(500)
        res.end('ItemController.getAll() => ' + err.message)
      })
  }

  getById(req, res) {
    const id = req.params.id
    if (isNaN(id)) {
      res.end('Identificador inválido.')
      return
    }

    Item.findOne({ where: { id: id } })
      .then(result => { res.json(result) })
      .catch(err => {
        res.status(500)
        res.end('ItemController.getById() => ' + err.message)
      })

  }

  update(req, res) {
    const item = req.body
    const msg = validation(item)
    if (msg) {
      res.end(msg)
      return
    }

    if (isNaN(item.id)) {
      res.end('Não foi possível atualizar este item.')
      return
    }

    Item.findOne({ where: { id: item.id } })
      .then(result => {
        if (!result) {
          res.end('O item não foi encontrado.')
          return
        }
        Item.update(item, { where: { id: item.id } })
          .then(result => res.end('Item atualizado com sucesso.'))
          .catch(err => res.end('Item.update() => ' + err.message))
      })
      .catch(err => res.end('Item.findOne() => ' + err.message))
  }

  create(req, res) {
    const item = req.body
    const msg = validation(item)
    if (msg) {
      res.end(msg)
      return
    }

    Item.create(item)
      .then(result => res.json(result))
      .catch(err => res.end('Item.create() => ' + err.message))
  }

  delete(req, res) {
    const id = req.params.id
    Item.destroy({ where: { id: id } })
      .then(result => res.end('Removido com sucesso.'))
      .catch(err => res.end('Item.destroy() => ' + err.message))
  }
}