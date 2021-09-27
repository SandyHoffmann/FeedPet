'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Agenda, { foreignKey: "agenda_id", as: "atividade", onDelete: 'CASCADE'  });
      this.belongsTo(models.Usuario, { foreignKey: "user_id", as: "usuario", onDelete: 'CASCADE'  });

    }
  };
  Atividade.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    atividade_feita: {
      type:DataTypes.STRING,
      allowNull:false
    },
    data_atividade: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Atividade',
    tableName: "atividades"
  });
  return Atividade;
};