import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Orders from './orders'
import Items from './items'
import Item from './item'
import NewItem from './new-item'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Orders} />
      <Route path='/orders' component={Orders} />
      <Route path='/items' component={Items} />
      <Route exact path='/item' component={NewItem} />
      <Route path='/item/:number' component={Item} />
    </Switch>
  </main>
)

export default Router
