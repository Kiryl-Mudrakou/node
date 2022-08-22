"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsRouter = void 0;
const express = require("express");
const group_service_1 = require("../service/group.service");
const service = new group_service_1.GroupService();
exports.groupsRouter = express.Router();
exports.groupsRouter.get('/', async (req, res, next) => {
    service.getAll().then((groups) => {
        res.send(groups);
    }).catch(error => next(error));
});
exports.groupsRouter.get('/:id', async (req, res, next) => {
    service.getGroupById(+req.params.id).then(group => {
        res.send(group);
    }).catch(error => next(error));
});
exports.groupsRouter.post('/', async (req, res, next) => {
    const group = req.body;
    service.createGroup(group).then(newGroupId => {
        res.send(newGroupId);
    }).catch(error => next(error));
});
exports.groupsRouter.put('/:id', async (req, res, next) => {
    const groupUpdate = req.body;
    service.updateGroup(+req.params.id, groupUpdate).then(updatedGroup => {
        res.json(updatedGroup);
    }).catch(error => next(error));
});
exports.groupsRouter.delete('/:id', async (req, res, next) => {
    service.deleteGroup(+req.params.id).then(deletedGroupId => {
        res.send(deletedGroupId);
    }).catch(error => next(error));
});
//# sourceMappingURL=groups.routers.js.map