module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('groups', {
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      permissions: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.ENUM('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'))
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('groups');
  }
};