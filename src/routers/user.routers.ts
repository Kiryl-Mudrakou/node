import { Request, Response } from 'express';
import { UserService} from '../service/user.service';
import * as express from "express";

const userService = new UserService();
export const userRouter = express.Router();
const validator = require('express-joi-validation').createValidator({});

const userSchema = require('../validators/validator').validation;

userRouter.get('/:id', async (req: Request, res: Response,) => {
  const id = +req.params.id;
  // @ts-ignore
  await userService.getUser(id).then((user) => {
    if (!user) {
      return res.status(404).end();
    } else {
     res.send(user);
    }
  });
});

userRouter.post('/', validator.body(userSchema), async (req:Request, res: Response) => {
  const passedUserData = req.body;
  try {
  const users = await userService.createUser(passedUserData);
    res.send(users);
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.put('/:id', validator.body(userSchema), async(req:Request, res: Response) => {
  const passedUserData = req.body;
  const id = +req.params.id;

  try {
    const user = await userService.updateUser(id, passedUserData);
    res.send(user);
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.delete('/:id', async (req:Request, res: Response) => {
  const id = +req.params.id;

  try {
    const user = await userService.deleteUser(id);
    res.send({ user, success: true });
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.get('/', async (req:Request, res: Response) => {
  const login = req.query.login;
  const limit = req.query.limit || 10

  try {
    const user = await userService.searchUser(typeof login === "string" ? login : '', limit);
    res.send(user);
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.all('*', (req:Request, res: Response) => {
  return res.status(404).end();
});
