'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Animal.init({
    nome: DataTypes.STRING,
    raca: DataTypes.STRING,
    cor: DataTypes.STRING,
    porte: DataTypes.STRING,
    tipo_animal: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};