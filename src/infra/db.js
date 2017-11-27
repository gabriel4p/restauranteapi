import Sequelize from 'sequelize'
import Item from './models/item'
import Config from '../config'


const connectionConfig = {
  logging: false,
  dialectOptions: {
    ssl: true
  }
}

if(!Config.DatabaseUrl)
throw "Defina a string de conxão com o banco"

const sequelize = new Sequelize(Config.DatabaseUrl, connectionConfig)

module.exports = {
  Item: Item(sequelize, Sequelize)
}