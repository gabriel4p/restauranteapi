import Sequelize from 'sequelize'
import Item from './models/item'
import Config from '../config'

const connectionConfig = {
  logging: false,
  dialectOptions: {
    ssl: true
  }
}

const sequelize = new Sequelize(Config.DbConnectionString, connectionConfig)

module.exports = {
  Item: Item(sequelize, Sequelize)
}