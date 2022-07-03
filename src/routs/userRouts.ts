import * as express from 'express';
import { UserService} from '../service/userService';
const userRouter = express.Router();
const validator = require('express-joi-validation').createValidator({});

const userModel = require('../model/userModel');
const userService = new UserService(userModel);

const userSchema = require('../validators/validator').validation;

userRouter.get('/:id', async (req, res) => {
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

userRouter.post('/', validator.body(userSchema), async (req, res) => {
  const passedUserData = req.body;
  try {
  const users = await userService.createUser(passedUserData);
    res.send(users);
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.put('/:id', validator.body(userSchema), async (req, res) => {
  const passedUserData = req.body;
  const id = req.params.id;
  // @ts-ignore

  try {
    const user = await userService.updateUser(id, passedUserData);
    res.send(user);
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  // @ts-ignore

  try {
    const user = await userService.deleteUser(id);
    res.send({ user, success: true });
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.get('/', async (req, res) => {
  const login = req.query.login;
  const limit = req.query.limit || 10

  try {
    // @ts-ignore
    const user = await userService.searchUser(login, limit);
    res.send(user);
  } catch (e) {
    res.status(400).end();
  }
});

userRouter.all('*', (req, res) => {
  return res.status(404).end();
});

export {userRouter};