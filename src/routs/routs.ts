import * as express from 'express';
const routers = express.Router();
import { UserService } from '../service/userService';

const userModel = require('../model/userModel');

const userService = new UserService(userModel);


routers.get("/", (req, res) => {

  userService.getAll().then((users: any) => {
    res.send(users);
  });
});

// @ts-ignore
routers.all('*', (req, res) => {
  return res.status(404).end();
});

export { routers } ;