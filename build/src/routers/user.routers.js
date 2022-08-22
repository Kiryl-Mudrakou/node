"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const user_service_1 = require("../service/user.service");
const express = require("express");
const userService = new user_service_1.UserService();
exports.userRouter = express.Router();
const validator = require('express-joi-validation').createValidator({});
const userSchema = require('../validators/validator').validation;
exports.userRouter.get('/:id', async (req, res, next) => {
    const id = +req.params.id;
    console.log(id);
    userService.getUser(id).then((user) => {
        if (!user) {
            return res.status(404).end();
        }
        else {
            res.send(user);
        }
    }).catch(error => next(error));
});
exports.userRouter.post('/', validator.body(userSchema), async (req, res, next) => {
    const passedUserData = req.body;
    userService.createUser(passedUserData).then(users => res.send(users)).catch(error => next(error));
});
exports.userRouter.put('/:id', validator.body(userSchema), async (req, res, next) => {
    const passedUserData = req.body;
    const id = +req.params.id;
    userService.updateUser(id, passedUserData).then(users => res.send(users)).catch(error => next(error));
});
exports.userRouter.delete('/:id', async (req, res, next) => {
    const id = +req.params.id;
    userService.deleteUser(id).then(user => res.send({ user, success: true })).catch(error => next(error));
});
exports.userRouter.get('/', async (req, res, next) => {
    const login = req.query.login;
    const limit = req.query.limit || 10;
    userService.searchUser(typeof login === "string" ? login : '', limit).then(user => res.send(user)).catch(error => next(error));
});
exports.userRouter.all('*', (req, res) => {
    return res.status(404).end();
});
//# sourceMappingURL=user.routers.js.map