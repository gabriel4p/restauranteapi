import React, { Component } from 'react'

import Loader from '../../components/loader.js'
import ErrorMessage from '../../components/error.js'

export default class Orders extends Component {
  componentDidMount () {
    const { getOrders } = this.props
    getOrders()
  }

  render () {
    const {
      orders: {
        requestStatus,
        orders
      } } = this.props

    if (requestStatus.loading) {
      return <Loader />
    } else if (requestStatus.fail) {
      return <ErrorMessage />
    } else {
      return (
        <table className='ui celled table'>
          <thead>
            <tr><th>Código</th>
              <th>Quant. de items</th>
              <th>Valor</th>
              <th>Aprovar</th>
            </tr></thead>
          <tbody>
            { orders.map(order =>
              <tr key={order.id}>
                <td>{ order.id }
                </td>
                <td>{ order.items }</td>
                <td>{ order.value }</td>
                <td><div className='ui toggle checkbox'>
                  <input type='checkbox' name='public' />
                  <label />
                </div></td>
              </tr>) }
          </tbody>
        </table>
      )
    }
  }
}
