module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userGroup', [
        {
          userId: 1,
          groupId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      {
        userId: 2,
        groupId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]
    );
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('userGroup', null, {});
  }
};