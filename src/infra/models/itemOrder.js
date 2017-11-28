export default (sequelize, DataTypes) => {
  const ItemOrder = sequelize.define('ItemOrder', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'Id'
    },
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'ItemId'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'PedidoId'
    }
  }, {
      classMethods: {},
      tableName: 'ItemPedido',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })

  return ItemOrder
}
