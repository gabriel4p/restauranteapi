import HttpStatus from 'http-status'
import notification from '../service/notification'
import { sequelize, Token, Order, Item, ItemOrder } from '../infra/db'

const validate = (order) => {
  let msg = ''
  if (!order.date || (new Date(order.date)).toString() == 'Invalid Date') msg = 'Data do pedido é inválida.'
  if (!order.resume) msg = 'Resumo inválido'
  if (isNaN(order.table) || order.table < 1) msg = 'Mesa inválida'
  if (!order.name) msg = 'O nome do representante da mesa é inválido'
  if (!Array.isArray(order.items) || order.items.length == 0) msg = 'O pedido deve possuir itens'
  return msg
}

export default class Controller {

  getAll(req, res) {
    Order.findAll({ include: Item })
      .then(result => {
        let orders = []
        for (let i = 0; i < result.length; i++) {
          let total = 0
          const itens = result[i].Items
          for (let j = 0; j < itens.length; j++)
            total += itens[j].value
          let order = {
            id: result[i].id,
            date: result[i].date,
            table: result[i].table,
            name: result[i].name,
            resume: result[i].resume,
            status: result[i].ok ? 'Atendido' : 'Pendente',
            items: itens,
            total: total.toFixed(2)
          }
          orders.push(order)
        }
        res.json({ orders: orders })
      })
      .catch(err => res.json({ data: err.message }))
  }

  getById(req, res) {

    const id = req.params.id

    if (isNaN(id)) {
      res.json({ data: 'Parâmetro inválido' })
      return
    }

    Order.findOne({ where: { id: id }, include: Item })
      .then(result => { res.json(result) })
      .catch(err => res.json({ data: err.message }))
  }

  create(req, res) {

    const order = req.body
    const msg = validate(order)

    if (msg) {
      res.json({ data: msg })
      return
    }

    sequelize.transaction(t => {
      return Order.create(order, { transaction: t })
        .then(result => {

          let promisses = []
          for (let i = 0; i < order.items.length; i++)
            promisses.push(ItemOrder.create(
              { itemId: order.items[i], orderId: result.id },
              { transaction: t }
            ))

          return Promise.all(promisses)
        })
    }).then(() => res.json({ data: 'Pedido criado com sucesso.' }))
      .catch(err => res.json({ data: err.message }))
  }

  delete(req, res) {
    const id = req.params.id

    if (isNaN(id)) {
      res.json({ data: 'Parâmetro inválido' })
      return
    }

    sequelize.transaction(t => {
      return ItemOrder.destroy({ where: { orderId: id } }, { transaction: t })
        .then(result => {
          return Order.destroy({ where: { id: id } }, { transaction: t })
        })
    }).then(result => res.json({ data: 'Removido com sucesso.' }))
      .catch(err => res.json({ data: err.message }))
  }

  ok(req, res) {

    const order = req.body

    if (isNaN(order.id)) {
      res.json({ data: 'Parâmetro "id" inválido' })
      return
    }

    Order.findOne({ where: { id: order.id } })
      .then(orderDb => {

        if (!orderDb) {
          res.json({ data: 'O pedido informado não existe' })
          return
        }

        Order.update({ ok: order.ok ? 1 : 0 }, { where: { id: order.id } })
          .then(() => {
            Token.findAll().then((tokens) => {
              console.log(tokens.map(p => p.token))
              notification.sendMessage(tokens.map(p => p.token), 'Pedido', 'O pedido da mesa ' + orderDb.table + ' está pronto.')
                .then(() => {
                  res.json({ data: 'Aprovado com sucesso, os atendentes foram notificados.' })
                }).catch((e) => {
                  console.log(e.message)
                  res.json({ data: 'Pedido aprovado, mas os atendentes não puderam ser notificados.' })
                })
            }).catch((e) => {
              console.log(e.message)
              res.json({ data: 'Pedido aprovado, mas os atendentes não puderam ser notificados.' })
            })
          })
          .catch(err => res.json({ data: err.message }))
      })
      .catch(err => res.json({ data: err.message }))
  }
}