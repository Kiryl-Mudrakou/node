import {NextFunction, Request, Response} from 'express';
import { UserService} from '../service/user.service';
import * as express from "express";

const userService = new UserService();
export const userRouter = express.Router();
const validator = require('express-joi-validation').createValidator({});

const userSchema = require('../validators/validator').validation;

userRouter.get('/:id', async (req: Request, res: Response,   next: NextFunction) => {
  const id = +req.params.id;
  console.log(id)
  // @ts-ignore
  userService.getUser(id).then((user) => {
    if (!user) {
      return res.status(404).end();
    } else {
     res.send(user);
    }
  }).catch(error => next(error));
});

userRouter.post('/', validator.body(userSchema), async (req:Request, res: Response,   next: NextFunction) => {
  const passedUserData = req.body;

  userService.createUser(passedUserData).then(users => res.send(users)).catch(error => next(error));
});

userRouter.put('/:id', validator.body(userSchema), async(req:Request, res: Response,   next: NextFunction) => {
  const passedUserData = req.body;
  const id = +req.params.id;

  userService.updateUser(id, passedUserData).then(users => res.send(users)).catch(error => next(error));
});

userRouter.delete('/:id', async (req:Request, res: Response,   next: NextFunction) => {
  const id = +req.params.id;

  userService.deleteUser(id).then(user => res.send({ user, success: true })).catch(error => next(error));
});

userRouter.get('/', async (req:Request, res: Response,   next: NextFunction) => {
  const login = req.query.login;
  const limit = req.query.limit || 10

  userService.searchUser(typeof login === "string" ? login : '', limit).then(user => res.send(user)).catch(error => next(error));
});

userRouter.all('*', (req:Request, res: Response) => {
  return res.status(404).end();
});
