"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermissions = exports.createPermission = void 0;
const permission_model_1 = require("../models/permission.model");
const createPermission = async (userId, groupId) => {
    return permission_model_1.Permission.create({ userId, groupId }, { returning: true });
};
exports.createPermission = createPermission;
const getPermissions = async () => {
    return await permission_model_1.Permission.findAll();
};
exports.getPermissions = getPermissions;
//# sourceMappingURL=permission.js.map