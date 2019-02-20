module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Token', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id'
    },
    token: {
      type: Sequelize.STRING,
      field: 'Token'
    }
  }, {
      tableName: 'Token',
      undercored: false,
      updatedAt: false,
      createdAt: false
    }),
  down: (queryInterface) => queryInterface.dropTable('Token')
}