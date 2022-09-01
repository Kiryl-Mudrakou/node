module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', 
      [
      {
        id: 1,
        login: 'John',
        password: 'somePassword3',
        age: '24',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        login: 'Some',
        password: 'somePassword1',
        age: '27',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        login: 'Name',
        password: 'somePassword12',
        age: '14',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        login: 'nameNew',
        password: 'somePassword4',
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