'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Usuario, {
        through: "chat_usuarios",
        as: "usuario",
        foreignKey: {
          name: "id_chat",
          type: DataTypes.UUID
        }
        })
      this.hasMany(models.Mensagem, { foreignKey: "id_chat", onDelete: 'CASCADE'});

      
    }
  };
  Chat.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chat',
    tableName: "chats"
  });
  return Chat;
};