"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnector = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const dbConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DP_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    protocol: process.env.DB_PROTOCOL,
    dialect: process.env.DB_DIALECT,
};
exports.dbConnector = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DP_PASSWORD, dbConfig);
//# sourceMappingURL=dbConnect.js.map