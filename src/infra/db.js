import Sequelize from 'sequelize'
import Config from '../config'
import fs from 'fs'
import path from 'path'
const connectionConfig = {
  logging: false,
  dialectOptions: {
    ssl: true
  }
}

if (!Config.DatabaseUrl) throw "Defina a string de conxão com o banco"

const sequelize = new Sequelize(Config.DatabaseUrl, connectionConfig)
let db = { sequelize: sequelize }

fs
  .readdirSync(path.join(__dirname, 'models'))
  .map(file => {
    const model = sequelize['import'](path.join(__dirname, 'models', file))
    db[model.name] = model
  })

db.Order.belongsToMany(db.Item, { through: 'ItemOrder', foreignKey: 'orderId' })
db.Item.belongsToMany(db.Order, { through: 'ItemOrder', foreignKey: 'itemId' })

module.exports = db