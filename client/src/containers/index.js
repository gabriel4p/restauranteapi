import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Orders from './orders'
import Items from './items'
import Item from './item'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Orders} />
      <Route path='/orders' component={Orders} />
      <Route path='/items' component={Items} />
      <Route path='/item' component={Item} />
    </Switch>
  </main>
)

export default Router
