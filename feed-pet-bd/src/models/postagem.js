'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Postagem.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    titulo: {
      type:DataTypes.STRING,
      allowNull:false
    },
    conteudo: {
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Postagem',
    tableName: 'postagems'
  });
  return Postagem;
};