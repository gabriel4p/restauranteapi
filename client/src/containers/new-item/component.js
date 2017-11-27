import React, { Component } from 'react'

import Image from 'react-image-resizer'

import Loader from '../../components/loader.js'
import ErrorMessage from '../../components/error.js'

export default class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      description: props.description,
      value: props.description,
      file: props.file,
      category: props.category,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static defaultProps = {
    category: 'bebida',
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.postItem(this.state)
  }

  render () {
    return (
      <form className='ui form' onSubmit={this.handleSubmit}>
        <div className='field'>
          <label>Nome</label>
          <input type='text' name='name' onChange={this.handleInputChange} required autoFocus minLength="5" maxLength="100" />
        </div>
        <div className='field'>
          <label>Descrição</label>
          <textarea rows='2' name='description' onChange={this.handleInputChange} required />
        </div>
        <div className='field'>
          <label>Categoria</label>
          <select name='category' onChange={this.handleInputChange} >
            <option value='bebida'>Bebida</option>
            <option value='comida'>Comida</option>
            <option value='sobremesa'>Sobremesa</option>
          </select>
        </div>
        <div className='field'>
          <label>Valor</label>
          <input type='number' name='value' onChange={this.handleInputChange} required min={0}/>
        </div>
        <div className='field'>
          <div className='ui grid'>
            <div className='twelve wide column bottom aligned'>
              <input type='file' id='file' name='file' onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <button className='ui primary button'>Salvar</button>
      </form>
    )
  }
  }
