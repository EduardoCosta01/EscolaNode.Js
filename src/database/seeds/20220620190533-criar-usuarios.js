'use strict';
const bcryptjs = require('bcryptjs')

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users',
    [{
      nome: 'Eduardo',
      email: 'duda@bol.com.br',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Fernanda',
      email: 'nanda@bol.com.br',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Mario',
      email: 'mario@bol.com.br',
      password_hash: await bcryptjs.hash('987654', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {});

  },

  async down ()  {},
};
