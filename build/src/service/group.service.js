"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
const group_1 = require("../data-access/group");
class GroupService {
    getAll() {
        return (0, group_1.getAll)();
    }
    getGroupById(id) {
        return (0, group_1.getById)(id);
    }
    deleteGroup(id) {
        return (0, group_1.deleteOne)(id);
    }
    createGroup(group) {
        return (0, group_1.createOne)(group);
    }
    updateGroup(id, group) {
        return (0, group_1.updateOne)(id, group);
    }
}
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map