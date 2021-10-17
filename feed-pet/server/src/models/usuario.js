'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Animal, {
        through: "usuarios_animais",
        as: "animal",
        foreignKey: {
          name: "id_usuario",
          type: DataTypes.UUID
        }
      });
      this.hasMany(models.Postagem, { foreignKey: "user_id", onDelete: 'CASCADE' });
      this.hasMany(models.Comentario, { foreignKey: "user_id", onDelete: 'CASCADE' });
      this.hasMany(models.Curtida, { foreignKey: "user_id", onDelete: 'CASCADE' });
      this.hasMany(models.Atividade, { foreignKey: "user_id", onDelete: 'CASCADE' });
      this.belongsTo(models.Endereco, { foreignKey: "endereco_id", as: "endereco", onDelete: 'CASCADE' });
      this.hasOne(models.RefreshToken, { foreignKey: "user_id", onDelete: 'CASCADE' });
      this.belongsToMany(models.Chat, {
        through: "chat_usuarios",
        as: "chat",
        foreignKey: {
          name: "id_usuario",
          type: DataTypes.UUID
        }
      })
      this.hasMany(models.Mensagem, { foreignKey: "id_usuario", onDelete: 'CASCADE'});

    }

    verificarSenha(senha) {
      return bcrypt.compareSync(senha, this.senha);
    }

    toJSON() {
      return {
        ...this.get(),
        senha: undefined
      }
    }

  };
  Usuario.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(senha) {
        this.setDataValue("senha", bcrypt.hashSync(senha, 10));
      }
    },
    avatar: {
      type: DataTypes.STRING
    },
    descricao: {
      type: DataTypes.STRING
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["admin", "usuario"]]
      },
      defaultValue: "usuario"
    },
    telefone: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    data_nascimento: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: "usuarios"
  });
  return Usuario;
};

