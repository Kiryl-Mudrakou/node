import * as express from "express";
import { routers } from '../routers/routs';
import { userRouter }  from '../routers/user.routers';
import { groupsRouter }  from '../routers/groups.routers';
import {permissionRouter} from "../routers/permission.routers";
import { errorHandler } from '../middlewares/errorHandler';
import { logger } from "../middlewares/winstonLogger";
import { log } from "../middlewares/loger";


const bodyParser = require('body-parser');

const app = express();

const PORT = '9000';

app.use(bodyParser.json());
app.use(errorHandler);
app.use(log);

app.use('/users', routers);
app.use('/user', userRouter);
app.use('/groups', groupsRouter);
app.use('/permissions', permissionRouter);

process.on('unhandledRejection',(e,origin)=>{
  logger.error('Winston unhandled rejection Logger...',e,origin);
})

process.on('uncaughtException',(e,origin)=>{
  logger.error('Winston Uncaught Exception Logger...',e,origin);
})

app.all("*", (req, res) => {
  return res.status(404).end();
});

app.listen(PORT,() => {
  console.log('server listening on port number ', PORT);
});
