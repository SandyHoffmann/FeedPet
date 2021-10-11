'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alertas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      local: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_desaparecimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      concluido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      id_animal: {
        type: Sequelize.UUID,
        allowNull:false,
        references: {
          model: "animais",
          key: "id"
        },        
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alertas');
  }
};