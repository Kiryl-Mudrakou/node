"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express = require("express");
const user_service_1 = require("../service/user.service");
const userService = new user_service_1.UserService();
exports.routers = express.Router();
exports.routers.get("/", async (req, res, next) => {
    userService.getAll().then(users => res.send(users)).catch(error => next(error));
});
exports.routers.all('*', (req, res) => {
    return res.status(404).end();
});
//# sourceMappingURL=routs.js.map