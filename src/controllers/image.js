import fs from 'fs'
import path from 'path'
import HttpStatus from 'http-status'
import sha1 from 'sha1'

const generateHashFile = (fileName) => {
  return sha1(new Date()).substring(0, 8) + fileName.toLowerCase()
}

export default class Controller {
  get(req, res) {
    const { name } = req.params

    const filePath = path.join(__dirname, '..', 'temp', name)
    console.log(filePath)
    fs.stat(filePath, (err) => {
      if (err) {
        res.status(HttpStatus.NOT_FOUND)
        res.end('File not found.')
      } else
        res.sendFile(filePath, { root: '/' })
    })
  }

  createImage(req, res) {
    const fileName = generateHashFile(req.file.originalname)
    const filePath = path.join(__dirname, '..', 'temp', fileName)

    fs.writeFile(filePath, req.file.buffer, 'binary', (err) => {
      if (err) {
        console.log(err)
        res.end('Erro ao salvar arquivo!')
      } else {
        res.sendFile(filePath, { root: '/' })
      }
    })
  }
}
