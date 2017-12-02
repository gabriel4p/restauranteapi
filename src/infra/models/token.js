module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'Id'
    },
    token: {
      type: DataTypes.STRING,
      field: 'Token'
    }
  }, {
      tableName: 'Token',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })
  return Token
}