import * as express from 'express';
import { UserService} from '../service/userService';
const userRouter = express.Router();
const validator = require('express-joi-validation').createValidator({});

const userModel = require('../model/userModel');
const userService = new UserService(userModel);

const userSchema = require('../validators/validator').validation;

userRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  // @ts-ignore
  userService.getUser(id).then((user: any) => {
    if (!user) {
      return res.status(404).end();
    } else {
     res.send(user);
    }
  });
});

userRouter.post('/', validator.body(userSchema), (req, res) => {
  const body = req.body;
  userService.createUser(body).then((user: any) => res.send(user));
});

userRouter.put('/:id', validator.body(userSchema), (req, res) => {
  const body = req.body;
  const id = req.params.id;
  // @ts-ignore
  userService.updateUser(id, body).then((user: any) => {
    if (!user) {
      return res.status(404).end();
    }
    res.send(user);
  });
});

userRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  // @ts-ignore
  userService.deleteUser(id).then((user: any) =>{ if (!user) {
    return res.status(404).end();
  }
    res.send({ success: true });})

});

userRouter.get('/', (req, res) => {
  const login = req.query.login;
  const limit = req.query.limit || 10
  // @ts-ignore
  userService.searchUser(login, limit).then((user: any) => {
    if (!user) {
      return res.status(404).end();
    } else {
      res.send(user);
    }
  });
});

userRouter.all('*', (req, res) => {
  return res.status(404).end();
});

export {userRouter};