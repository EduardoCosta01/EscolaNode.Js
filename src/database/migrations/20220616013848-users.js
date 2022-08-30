'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allonNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allonNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allonNull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');

  }
};
