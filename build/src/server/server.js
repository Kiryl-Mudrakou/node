"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routs_1 = require("../routers/routs");
const user_routers_1 = require("../routers/user.routers");
const groups_routers_1 = require("../routers/groups.routers");
const permission_routers_1 = require("../routers/permission.routers");
const errorHandler_1 = require("../middlewares/errorHandler");
const winstonLogger_1 = require("../middlewares/winstonLogger");
const loger_1 = require("../middlewares/loger");
const cors = require("cors");
const login_routes_1 = require("../routers/login.routes");
const jwtValidator_1 = require("../middlewares/jwtValidator");
require("dotenv/config");
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/users', jwtValidator_1.jwtValidator, routs_1.routers);
app.use('/user', jwtValidator_1.jwtValidator, user_routers_1.userRouter);
app.use('/groups', jwtValidator_1.jwtValidator, groups_routers_1.groupsRouter);
app.use('/permissions', jwtValidator_1.jwtValidator, permission_routers_1.permissionRouter);
app.use('/login', login_routes_1.loginRouter);
app.use(errorHandler_1.errorHandler);
app.use(loger_1.log);
process.on('unhandledRejection', (e, origin) => {
    winstonLogger_1.logger.error('Winston unhandled rejection Logger...', e, origin);
});
process.on('uncaughtException', (e, origin) => {
    winstonLogger_1.logger.error('Winston Uncaught Exception Logger...', e, origin);
});
app.all("*", (req, res) => {
    return res.status(404).end();
});
app.listen(process.env.SERVER_PORT, () => {
    console.log('server listening on port number ', process.env.SERVER_PORT);
});
//# sourceMappingURL=server.js.map