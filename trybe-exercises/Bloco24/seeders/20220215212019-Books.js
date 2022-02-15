'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'xablau',
        author: 'xablauson',
        pageQuantity: 167,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'xablau2',
        author: 'xablauson',
        pageQuantity: 214,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

    down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
