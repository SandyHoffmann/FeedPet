'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Token.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    token: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    refresh_token: {
      type:DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Token',
    tableName: "tokens"
  });
  return Token;
};