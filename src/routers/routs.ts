import { Request, Response } from 'express';
import * as express from "express";
const routers = express.Router();
import { UserService } from '../service/user.service';

const userService = new UserService();

routers.get("/", async (req:Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.send(users);
  } catch (e) {
    res.status(400).end();
  }
});

routers.all('*', (req:Request, res: Response) => {
  return res.status(404).end();
});

export { routers } ;