import { Request, Response, NextFunction } from 'express';
import * as express from "express";
import { PermissionService } from '../service/permission.service';

const service = new PermissionService();

export const permissionRouter = express.Router();

permissionRouter.post('/', async (req: Request, res: Response, next:NextFunction) => {
    const userId = req.body.userId;
    const groupId = req.body.groupId;

    service.addUserToGroup(userId, groupId).then(group => res.send(group)).catch(error => next(error));
});

permissionRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    service.getPermissions().then(permission => res.send(permission)).catch(error => next(error));
});