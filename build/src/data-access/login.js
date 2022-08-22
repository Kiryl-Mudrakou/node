"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const user_model_1 = require("../models/user.model");
const Login = (login) => {
    return user_model_1.User.findOne({
        where: {
            login
        }
    });
};
exports.Login = Login;
//# sourceMappingURL=login.js.map