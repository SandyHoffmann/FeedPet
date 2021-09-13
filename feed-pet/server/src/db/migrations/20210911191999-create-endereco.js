'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      rua: {
        type: Sequelize.STRING,
        allowNull:false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull:false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('enderecos');
  }
};