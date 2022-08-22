"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express = require("express");
const validator_1 = require("../validators/validator");
const login_service_1 = require("../service/login.service");
const validator = require('express-joi-validation').createValidator({});
const service = new login_service_1.LoginService();
exports.loginRouter = express.Router();
exports.loginRouter.get('/', validator.body(validator_1.loginValidator), async (req, res) => {
    const { login, password } = req.body;
    const token = await service.loginUser(login, password);
    console.log(token);
    res.status(200).send(token);
});
//# sourceMappingURL=login.routes.js.map