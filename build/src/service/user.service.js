"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../data-access/user");
class UserService {
    createUser(payload) {
        return (0, user_1.create)(payload);
    }
    getUser(id) {
        return (0, user_1.findOne)(id);
    }
    deleteUser(id) {
        return (0, user_1.remove)(id);
    }
    updateUser(id, payload) {
        return (0, user_1.update)(id, payload);
    }
    searchUser(login, limit) {
        return (0, user_1.findAll)(login, limit);
    }
    getAll() {
        return (0, user_1.getAll)();
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map