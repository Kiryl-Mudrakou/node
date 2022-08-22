"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.findAll = exports.findByLogin = exports.update = exports.remove = exports.create = exports.findOne = void 0;
const sequelize_1 = require("sequelize");
const user_model_1 = require("../models/user.model");
const findOne = async (id) => {
    try {
        return await user_model_1.User.findOne({
            where: { id }
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.findOne = findOne;
const create = async (user) => {
    try {
        return await user_model_1.User.create(user);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.create = create;
const remove = async (id) => {
    let user = await user_model_1.User.update({ isDeleted: true }, { where: { id } });
    return user[0];
};
exports.remove = remove;
const update = async (id, updatedUser) => {
    try {
        const user = await user_model_1.User.update(updatedUser, {
            where: { id, isDeleted: false },
            returning: true
        });
        return user ? user[1] : null;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.update = update;
const findByLogin = async (login) => {
    return await user_model_1.User.findOne({
        where: {
            login
        }
    });
};
exports.findByLogin = findByLogin;
const findAll = async (searchSubLogin, limit) => {
    const iLike = sequelize_1.Op.iLike;
    return await user_model_1.User.findAll({
        limit: limit,
        where: { login: { [iLike]: searchSubLogin + "%" }, isDeleted: false },
        order: [
            ['login', 'ASC'],
        ],
    });
};
exports.findAll = findAll;
const getAll = async () => {
    try {
        return await user_model_1.User.findAll({
            where: {}
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.getAll = getAll;
//# sourceMappingURL=user.js.map