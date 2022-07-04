module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '1123124-asdfg-124',
        login: 'John',
        password: 'somePassword',
        age: '24',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '112-asdfasf-13124-asdfg-124',
        login: 'Some',
        password: 'somePassword',
        age: '27',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'asdfg-124',
        login: 'Name',
        password: 'somePassword',
        age: '14',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1123124-asdfg-asdgfa-12r1-asda',
        login: 'nameNew',
        password: 'somePassword',
        age: '35',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};