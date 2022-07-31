module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', 
      [
      {
        id: 1,
        login: 'John',
        password: 'somePassword',
        age: '24',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        login: 'Some',
        password: 'somePassword',
        age: '27',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        login: 'Name',
        password: 'somePassword',
        age: '14',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        login: 'nameNew',
        password: 'somePassword',
        age: '35',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};