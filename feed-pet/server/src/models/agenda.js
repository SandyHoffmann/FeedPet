'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Atividade, { foreignKey: "agenda_id", onDelete: 'CASCADE'});
      this.belongsTo(models.Animal, { 
        foreignKey: {
          name: "id_animal",
          allowNull: false
        }, 
        as: "animal" 
      });      
    }
  };
  Agenda.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'Agenda',
    tableName: 'agendas'

  });
  return Agenda;
};