'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', {
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
      sobrenome: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allonNull: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        allonNull: false,
      },
      altura: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('alunos');

  }
};
