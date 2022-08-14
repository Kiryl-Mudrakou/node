import {NextFunction, Request, Response} from 'express';
import * as express from "express";
import {loginValidator} from "../validators/validator";
import {LoginService} from '../service/login.service';
import jwt from "jsonwebtoken";
import {JWT_SECRET_KEY} from "../constants/constants";

const validator = require('express-joi-validation').createValidator({});
const service = new LoginService();
export const loginRouter = express.Router();

loginRouter.get('/', validator.body(loginValidator), (req: Request, res: Response, next: NextFunction) => {
  const { login, password } = req.body;
  service.loginUser(login).then(data => {
    if (data?.password !== password && !data) {
      return res.status(401).send('Unauthorized user');
    } else {
      const payload = {login: data?.login, id: data?.id}
      console.log(payload, 'payload');
      const token = jwt.sign(payload, JWT_SECRET_KEY);
      console.log(token);
      return res.status(200).send();
    }

  }).catch(error => next(error))
})
