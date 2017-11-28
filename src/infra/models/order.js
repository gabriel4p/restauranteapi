module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'Id'
    },
    date: {
      type: DataTypes.DATE,
      field: 'Data'
    },
    table: {
      type: DataTypes.INTEGER,
      field: 'Mesa'
    },
    name: {
      type: DataTypes.STRING,
      field: 'Nome'
    },
    resume: {
      type: DataTypes.STRING,
      field: 'Resumo'
    }
  }, {
      classMethods: {
        associate: (models) => {
        }
      },
      tableName: 'Pedido',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })
  return Order
}