"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionRouter = void 0;
const express = require("express");
const permission_service_1 = require("../service/permission.service");
const service = new permission_service_1.PermissionService();
exports.permissionRouter = express.Router();
exports.permissionRouter.post('/', async (req, res, next) => {
    const userId = req.body.userId;
    const groupId = req.body.groupId;
    service.addUserToGroup(userId, groupId).then(group => res.send(group)).catch(error => next(error));
});
exports.permissionRouter.get('/', async (req, res, next) => {
    service.getPermissions().then(permission => res.send(permission)).catch(error => next(error));
});
//# sourceMappingURL=permission.routers.js.map