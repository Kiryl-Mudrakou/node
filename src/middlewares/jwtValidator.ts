import * as jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import {JWT_SECRET_KEY} from "../constants/constants";

// @ts-ignore
export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers['access-token'] as string;
  if (!accessToken) {
    res.status(401).send("Unauthorized user");
    next();
  }
  jwt.verify(accessToken, JWT_SECRET_KEY, (err) => {
    err ? res.status(403).send("Forbidden") : next();
  });
};