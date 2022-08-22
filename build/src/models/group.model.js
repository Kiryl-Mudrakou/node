"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const sequelize_1 = require("sequelize");
const dbConnect_1 = require("../db/dbConnect");
const user_model_1 = require("./user.model");
class Group extends sequelize_1.Model {
    static associate() {
        Group.belongsToMany(user_model_1.User, {
            through: 'userGroup'
        });
    }
}
exports.Group = Group;
Group.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    permissions: {
        type: sequelize_1.DataTypes.ENUM('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'),
        allowNull: false
    }
}, {
    tableName: 'groups',
    sequelize: dbConnect_1.dbConnector
});
//# sourceMappingURL=group.model.js.map