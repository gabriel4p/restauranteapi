import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Loader from '../../components/loader.js'
import ErrorMessage from '../../components/error.js'

export default class Items extends Component {
  componentDidMount () {
    const { getItems } = this.props
    getItems()
  }

  render () {
    const {
      items: {
        items,
        requestStatus
      }
    } = this.props

    if (requestStatus.loading) {
      return <Loader />
    } else if (requestStatus.fail) {
      return <ErrorMessage />
    } else {
      return (
        <table className='ui celled table'>
          <thead>
            <tr><th>Código</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Editar</th>
            </tr></thead>
          <tbody>
            { items.map(item =>
              <tr key={item.id}>
                <td>{ item.id }</td>
                <td>{ item.name }</td>
                <td>{ item.value }</td>
                <td><Link to={`/item/${item.id}`}>Editar</Link></td>
              </tr>) }
          </tbody>
        </table>
      )
    }
  }
}
