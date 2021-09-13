'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curtida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */""
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, { foreignKey: "user_id", as: "usuario" });
      this.belongsTo(models.Postagem, { foreignKey: "post_id", as: "postagem" });
    }
  };
  Curtida.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    tipo: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Curtida',
    tableName: "curtidas"
  });
  return Curtida;
};