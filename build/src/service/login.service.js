"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const user_1 = require("../data-access/user");
const jwt = require("jsonwebtoken");
const constants_1 = require("../constants/constants");
class LoginService {
    async loginUser(login, password) {
        const user = await (0, user_1.findByLogin)(login);
        if ((user === null || user === void 0 ? void 0 : user.password) !== password && !user) {
            return new Error();
        }
        else {
            const payload = { login: user === null || user === void 0 ? void 0 : user.login, id: user === null || user === void 0 ? void 0 : user.id };
            return jwt.sign(payload, constants_1.JWT_SECRET_KEY);
        }
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map