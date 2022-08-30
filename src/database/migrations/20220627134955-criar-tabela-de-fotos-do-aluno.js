'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      originalname: {
        type: Sequelize.STRING,
        allonNull: false,
      },

      filename: {
        type: Sequelize.STRING,
        allonNull: false,
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allonNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('fotos');
  }
};
