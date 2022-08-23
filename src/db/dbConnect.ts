import {Sequelize, Dialect} from 'sequelize';
import 'dotenv/config'

const dbConfig = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DP_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(String(process.env.DB_PORT)),
  protocol: process.env.DB_PROTOCOL,
  dialect: process.env.DB_DIALECT as Dialect,
}

export const dbConnector = new Sequelize( process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DP_PASSWORD as string, dbConfig);

