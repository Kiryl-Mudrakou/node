"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.createOne = exports.getById = exports.getAll = void 0;
const group_model_1 = require("../models/group.model");
const getAll = async () => {
    return await group_model_1.Group.findAll();
};
exports.getAll = getAll;
const getById = async (id) => {
    return await group_model_1.Group.findByPk(id);
};
exports.getById = getById;
const createOne = async (group) => {
    return group_model_1.Group.create({ name: group.name, permissions: group.permissions }, { returning: true });
};
exports.createOne = createOne;
const updateOne = async (id, group) => {
    return group_model_1.Group.update(group, {
        where: {
            id
        },
        returning: true
    });
};
exports.updateOne = updateOne;
const deleteOne = async (id) => {
    return group_model_1.Group.destroy({
        where: {
            id
        }
    });
};
exports.deleteOne = deleteOne;
//# sourceMappingURL=group.js.map