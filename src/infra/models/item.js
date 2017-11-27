module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'Id'
    },
    category: {
      type: DataTypes.STRING,
      field: 'Categoria'
    },
    description: {
      type: DataTypes.STRING,
      field: 'Descricao'
    },
    name: {
      type: DataTypes.STRING,
      field: 'Titulo'
    },
    imagePath: {
      type: DataTypes.STRING,
      field: 'UrlImagem'
    },
    value: {
      type: DataTypes.DECIMAL,
      field: 'Valor'
    }
  }, {
    tableName: 'Item',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })
  return Item
}
