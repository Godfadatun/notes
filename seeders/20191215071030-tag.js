'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('tags', [{
      name: 'Assignment',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      name: 'Test',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      name: 'class',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      name: 'exam',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      name: 'project',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      name: 'study',
      createdAt : new Date(),
      updatedAt : new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
