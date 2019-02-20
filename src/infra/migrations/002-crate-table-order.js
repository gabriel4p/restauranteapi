module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Order', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id'
    },
    date: {
      type: Sequelize.DATE,
      field: 'Data'
    },
    table: {
      type: Sequelize.INTEGER,
      field: 'Mesa'
    },
    name: {
      type: Sequelize.STRING,
      field: 'Nome'
    },
    resume: {
      type: Sequelize.STRING,
      field: 'Resumo'
    },
    ok: {
      type: Sequelize.INTEGER,
      field: 'Atendido'
    }
  }, {
      tableName: 'Order',
      undercored: false,
      updatedAt: false,
      createdAt: false
    }),
  down: (queryInterface) => queryInterface.dropTable('Order')
}