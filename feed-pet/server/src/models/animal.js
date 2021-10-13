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
      this.belongsToMany(models.Usuario, {
        through: "usuarios_animais",
        as: "usuario",
        foreignKey: {
          name: "id_animal",
          type: DataTypes.UUID
        }
        })
        this.hasOne(models.Agenda, { foreignKey: "id_animal", as: "agenda" });
        this.hasOne(models.Alerta, { foreignKey: "id_animal", as: "alerta" });
    }
  };
  Animal.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: {
      type:DataTypes.STRING,
      allowNull:false
    },
    raca: {
      type:DataTypes.STRING,
      allowNull:false
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: {
      type:DataTypes.STRING,
      allowNull:false
    },
    porte: {
      type:DataTypes.STRING,
      allowNull:false
    },
    tipo_animal: {
      type:DataTypes.STRING,
      allowNull:false
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false
    },
    idade: {
      type:DataTypes.STRING,
      allowNull:false
    },
    avatar: {
      type: DataTypes.STRING
    },
    keyS3: {
      type: DataTypes.STRING,    
    }
    
  }, {
    sequelize,
    modelName: 'Animal',
    tableName: 'animais',
    // hooks: {
    //   beforeDestroy: async (animal) => {

    //   }
    // }
  });
  return Animal;
};