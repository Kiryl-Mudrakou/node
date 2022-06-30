import * as express from 'express';
const bodyParser = require('body-parser');

import { routers } from '../routs/routs';
import { userRouter }  from '../routs/userRouts';

const app = express();

const PORT = '9000';

app.use(bodyParser.json());

app.use('/users', routers);

app.use('/user', userRouter);

app.all("*", (req, res) => {
  return res.status(404).end();
});

app.listen(PORT,() => {
  console.log('server listening on port number ', PORT);
});