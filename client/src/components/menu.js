import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => (
  <div className='ui two item menu'>
    <Link className='item' to='/orders'>Pedidos</Link>
    <Link className='item' to='/items'>Items</Link>
  </div>
)

export default Menu
