import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import router from './src/routes/router'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', process.env.PORT || 3001)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
router(app)

const server = http.createServer(app)

server.listen(app.get('port'), () => { console.log(`Running in port ${app.get('port')}`) })