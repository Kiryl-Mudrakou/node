import { Request, Response, NextFunction } from 'express';
import * as express from "express";
import { UserService } from '../service/user.service';

const userService = new UserService();
export const routers = express.Router();

routers.get("/", async (req:Request, res: Response, next: NextFunction) => {
   userService.getAll().then(users => res.send(users)).catch(error => next(error));
});

routers.all('*', (req:Request, res: Response) => {
  return res.status(404).end();
});
