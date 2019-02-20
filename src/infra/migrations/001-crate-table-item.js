module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Item', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id'
    },
    category: {
      type: Sequelize.STRING,
      field: 'Categoria'
    },
    description: {
      type: Sequelize.STRING,
      field: 'Descricao'
    },
    name: {
      type: Sequelize.STRING,
      field: 'Titulo'
    },
    imagePath: {
      type: Sequelize.STRING,
      field: 'UrlImagem'
    },
    value: {
      type: Sequelize.DECIMAL,
      field: 'Valor'
    }
  }, {
      tableName: 'Item',
      undercored: false,
      updatedAt: false,
      createdAt: false
    }),
  down: (queryInterface) => queryInterface.dropTable('Item')
}