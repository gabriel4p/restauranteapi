import React, { Component } from 'react'

import Image from 'react-image-resizer'

import Loader from '../../components/loader.js'
import ErrorMessage from '../../components/error.js'

export default class Item extends Component {
  componentDidMount () {
    const {
      getItem,
      location: {
        pathname,
      }
    } = this.props

    const itemId = parseInt(pathname.replace(/\D/g, ''))
    getItem(itemId)
  }

  render () {
    const {
      item: {
        requestStatus,
        item
      }
    } = this.props

    if (requestStatus.loading) {
      return <Loader />
    } else if (requestStatus.fail) {
      return <ErrorMessage />
    } else {
      return (
        <form className='ui form'>
          <div className='field'>
            <label>Nome</label>
            <input type='text' name='name' defaultValue={item.name} />
          </div>
          <div className='field'>
            <label>Descrição</label>
            <textarea rows='2' name='description' defaultValue={item.description} />
          </div>
          <div className='field'>
            <label>Categoria</label>
            <select>
              <option value='0'>Bebida</option>
              <option value='1'>Comida</option>
            </select>
          </div>
          <div className='field'>
            <label>Valor</label>
            <input type='number' name='value' defaultValue={item.value} />
          </div>
          <div className='field'>
            <div className='ui grid'>
              <div className='four wide column'>
                <Image
                  src={item.imagePath}
                  height={150}
                  width={150} />
              </div>
              <div className='twelve wide column bottom aligned'>
                <input type='file' id='file' />
              </div>
            </div>
          </div>
          <button className='ui primary button' type='submit'>Salvar</button>
        </form>
      )
    }
  }
}
