import {Request, Response, NextFunction} from 'express';
import * as express from "express";
import {GroupService} from '../service/group.service';
import {IGroup} from "../interfeces/IUsers";

const service = new GroupService();

export const groupsRouter = express.Router();

groupsRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
 service.getAll().then((groups) => {
   res.send(groups);
 }).catch(error => next(error));
});

groupsRouter.get('/:id', async (req: Request, res: Response,  next: NextFunction) => {

  service.getGroupById(+req.params.id).then(group => {
    res.send(group);
  }).catch(error => next(error));
});

groupsRouter.post('/', async (req: Request, res: Response,  next: NextFunction) => {
  const group: IGroup = req.body;
  service.createGroup(group).then(newGroupId => {
    res.send( newGroupId);
  }).catch(error => next(error));
});


groupsRouter.put('/:id', async (req: Request, res: Response,  next: NextFunction) => {
  const groupUpdate: IGroup = req.body;

  service.updateGroup(+req.params.id, groupUpdate).then(updatedGroup => {
    res.json(updatedGroup);
  }).catch(error => next(error));
});


groupsRouter.delete('/:id', async (req: Request, res: Response,  next: NextFunction) => {
  service.deleteGroup(+req.params.id).then(deletedGroupId => {
    res.send( deletedGroupId)
  }).catch(error => next(error));
});