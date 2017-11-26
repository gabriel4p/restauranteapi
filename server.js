const express = require('express')

const app = express()

app.set('port', process.env.PORT || 3001)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('/api/orders', (req, res) => {
  res.json({
    orders: [
      {
        id: 1,
        items: 10,
        value: 200
      },
      {
        id: 2,
        items: 10,
        value: 200
      },
      {
        id: 3,
        items: 10,
        value: 200
      },
      {
        id: 4,
        items: 10,
        value: 200
      }
    ]
  })
})

app.get('/api/items', (req, res) => {
  res.json({
    items: [
      {
        id: 1,
        name: 'Food',
        description: 'Description',
        category: 'Category',
        value: 10,
        imagePath: 'http://brcdn.ar-cdn.com/recipes/originalxl/ebabbcdd-d246-48e5-abe9-f6496f6fc8ba.jpg'
      },
      {
        id: 2,
        name: 'Food 2',
        description: 'Description',
        category: 'Category',
        value: 10,
        imagePath: 'http://brcdn.ar-cdn.com/recipes/originalxl/ebabbcdd-d246-48e5-abe9-f6496f6fc8ba.jpg'
      }
    ]
  })
})

app.get('/api/items/1', (req, res) => {
  res.json({
    id: 1,
    name: 'Food',
    description: 'Description',
    category: 'Category',
    value: 10,
    imagePath: 'https://img.cybercook.uol.com.br/imagens/receitas/406/massa-de-macarrao.jpg'
  })
})

app.get('/api/items/2', (req, res) => {
  res.json({
    id: 2,
    name: 'Food 2',
    description: 'Saboroza comida',
    category: 'Category',
    value: 10,
    imagePath: 'http://brcdn.ar-cdn.com/recipes/originalxl/ebabbcdd-d246-48e5-abe9-f6496f6fc8ba.jpg'
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
