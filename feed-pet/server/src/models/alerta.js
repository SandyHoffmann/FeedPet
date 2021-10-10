'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Animal, { 
        foreignKey: {
          name: "id_animal",
          allowNull: false
        }, 
        as: "animal" 
      });  
    }
  };
  alerta.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dataDesaparecimento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    concluido: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Alerta',
    tableName: 'alertas'
  });
  return alerta;
};