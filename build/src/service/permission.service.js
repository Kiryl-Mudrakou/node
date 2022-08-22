"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const permission_1 = require("../data-access/permission");
class PermissionService {
    addUserToGroup(UserId, GroupId) {
        return (0, permission_1.createPermission)(UserId, GroupId);
    }
    getPermissions() {
        return (0, permission_1.getPermissions)();
    }
}
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map