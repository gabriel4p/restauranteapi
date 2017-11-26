import React from 'react'

import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import Menu from './components/menu.js'
import Container from './containers'
import createStore from './store'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <div className='ui raised very padded text container segment center'>
      <Menu />
      <Container />
    </div>
  </Provider>
)

export default App
