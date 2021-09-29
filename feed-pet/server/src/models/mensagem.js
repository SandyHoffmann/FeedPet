'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, { foreignKey: "id_usuario", as: "usuario" });
      this.belongsTo(models.Chat, { foreignKey: "id_chat", as: "chat" });

    }
  };
  Mensagem.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    conteudo: {
      type:DataTypes.STRING,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'Mensagem',
    tableName: "mensagems"
  });
  return Mensagem;
};