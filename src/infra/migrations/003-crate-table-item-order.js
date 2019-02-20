module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ItemOrder', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id'
    },
    itemId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'ItemId'
    },
    orderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'PedidoId'
    }
  }, {
      tableName: 'ItemOrder',
      undercored: false,
      updatedAt: false,
      createdAt: false
    }),
  down: (queryInterface) => queryInterface.dropTable('ItemOrder')
}