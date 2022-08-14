import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import {JWT_SECRET_KEY} from "../constants/constants";

// @ts-ignore
export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers['access-token'] as string;
  if (!accessToken) {
    return res.status(401).send("Unauthorized user");
  }
  jwt.verify(accessToken, JWT_SECRET_KEY, (err) => {
    if (err) {
      return res.status(403).send("Forbidden");
    }
    return next();
  });
};