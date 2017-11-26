module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'Id'
    },
    categoria: {
      type: DataTypes.STRING,
      field: 'Categoria'
    },
    descricao: {
      type: DataTypes.STRING,
      field: 'Descricao'
    },
    titulo: {
      type: DataTypes.STRING,
      field: 'Titulo'
    },
    urlImagem: {
      type: DataTypes.STRING,
      field: 'UrlImagem'
    },
    valor: {
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
