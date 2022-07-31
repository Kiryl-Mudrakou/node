module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('groups', [
      {
        id: 1,
        name: 'Admin',
        permissions: Sequelize.literal(`ARRAY['READ', 'WRITE', 'DELETE']::"enum_groups_permissions"[]`),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'User',
        permissions: Sequelize.literal(`ARRAY['READ']::"enum_groups_permissions"[]`),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Premium User',
        permissions: Sequelize.literal(`ARRAY['READ', 'WRITE', 'UPLOAD_FILES']::"enum_groups_permissions"[]`),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Super User',
        permissions: Sequelize.literal(`ARRAY['READ', 'WRITE','SHARE', 'UPLOAD_FILES']::"enum_groups_permissions"[]`),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    );
  },

   down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('groups', null, {});
  }
};