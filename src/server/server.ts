import * as express from "express";
import { routers } from '../routers/routs';
import { userRouter }  from '../routers/user.routers';
import { groupsRouter }  from '../routers/groups.routers';
import {permissionRouter} from "../routers/permission.routers";
import { errorHandler } from '../middlewares/errorHandler';
import { logger } from "../middlewares/winstonLogger";
import { log } from "../middlewares/loger";
import * as cors from 'cors'
import {loginRouter} from "../routers/login.routes";
import {jwtValidator} from "../middlewares/jwtValidator";
import 'dotenv/config';

const bodyParser = require('body-parser');

const app = express();

//const PORT = '9000';

app.use(cors());
app.use(bodyParser.json());

app.use('/users', jwtValidator, routers);
app.use('/user', jwtValidator, userRouter);
app.use('/groups', jwtValidator, groupsRouter);
app.use('/permissions', jwtValidator, permissionRouter);
app.use('/login', loginRouter);

app.use(errorHandler);
app.use(log);

process.on('unhandledRejection',(e,origin)=>{
  logger.error('Winston unhandled rejection Logger...',e,origin);
})

process.on('uncaughtException',(e,origin)=>{
  logger.error('Winston Uncaught Exception Logger...',e,origin);
})

app.all("*", (req, res) => {
  return res.status(404).end();
});

app.listen(process.env.SERVER_PORT,() => {
  console.log('server listening on port number ', process.env.SERVER_PORT);
});
