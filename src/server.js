import express from 'express'
import path from 'path'
//import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import http from 'http'
import router from './routes/router'

let app = express()

app.use(express.static('public'))
//app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const server = http.createServer(app)
router(app)

const port = process.env.PORT || 3000
server.listen(port, () => { console.log(`Running in port ${port}`) })