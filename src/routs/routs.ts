import * as express from 'express';
const routers = express.Router();
import { UserService } from '../service/userService';

const userModel = require('../model/userModel');

const userService = new UserService(userModel);


routers.get("/", async (req, res) => {

  try {
    const users = await userService.getAll();
    res.send(users);
  } catch (e) {
    res.status(400).end();
  }
});

// @ts-ignore
routers.all('*', (req, res) => {
  return res.status(404).end();
});

export { routers } ;