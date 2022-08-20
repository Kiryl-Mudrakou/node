import { Request, Response} from 'express';
import * as express from "express";
import {loginValidator} from "../validators/validator";
import {LoginService} from '../service/login.service';

const validator = require('express-joi-validation').createValidator({});
const service = new LoginService();
export const loginRouter = express.Router();

loginRouter.get('/', validator.body(loginValidator), async (req: Request, res: Response) => {
  const { login, password } = req.body;

  const token = await service.loginUser(login, password);
  console.log(token)
  res.status(200).send(token)
})
