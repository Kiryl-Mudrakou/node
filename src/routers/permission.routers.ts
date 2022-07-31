import { Request, Response } from 'express';
import * as express from "express";
import { PermissionService } from '../service/permission.service';

const service = new PermissionService();

export const permissionRouter = express.Router();

permissionRouter.post('/', async (req: Request, res: Response) => {
    const userId = req.body.userId;
    const groupId = req.body.groupId;
    const group = service.addUserToGroup(userId, groupId)
    res.send(group);
});

permissionRouter.get('/', async (req: Request, res: Response) => {
     const permissions = await service.getPermissions();
     res.send(permissions)
});