"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const sequelize_1 = require("sequelize");
const dbConnect_1 = require("../db/dbConnect");
class Permission extends sequelize_1.Model {
}
exports.Permission = Permission;
Permission.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    groupId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'groups',
            key: 'id'
        }
    }
}, {
    tableName: 'userGroup',
    sequelize: dbConnect_1.dbConnector
});
//# sourceMappingURL=permission.model.js.map