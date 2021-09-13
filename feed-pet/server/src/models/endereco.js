'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Usuario, { foreignKey: "endereco_id", onDelete: 'CASCADE'});
    }
  };
  Endereco.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    rua: {
      type:DataTypes.STRING,
      allowNull:false
    },
    bairro: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cidade: {
      type:DataTypes.STRING,
      allowNull:false
    },
    estado: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos'
  });
  return Endereco;
};