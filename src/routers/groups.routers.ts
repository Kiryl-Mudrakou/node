import {Request, Response} from 'express';
import * as express from "express";
import {GroupService} from '../service/group.service';
import {IGroup} from "../interfeces/IUsers";

const service = new GroupService();

export const groupsRouter = express.Router();

groupsRouter.get('/', async (req: Request, res: Response) => {
  const groups = await service.getAll();
  res.status(200).send(groups);
});

groupsRouter.get('/:id', async (req: Request, res: Response) => {

  const group = await service.getGroupById(+req.params.id);
  res.status(200).send(group);

});

groupsRouter.post('/', async (req: Request, res: Response) => {
  const group: IGroup = req.body;
  const newGroupId = await service.createGroup(group);
  res.status(200).json({id: newGroupId});

});


groupsRouter.put('/:id', async (req: Request, res: Response) => {
  const groupUpdate: IGroup = req.body;
  const updatedGroup = await service.updateGroup(+req.params.id, groupUpdate);
  return res.status(200).json(updatedGroup);
});


groupsRouter.delete('/:id', async (req: Request, res: Response) => {
  const deletedGroupId = await service.deleteGroup(+req.params.id);
  return res.status(200).send({id: deletedGroupId});
});