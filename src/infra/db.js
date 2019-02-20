import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'

import { production } from './config'

const sequelize = new Sequelize(production)
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