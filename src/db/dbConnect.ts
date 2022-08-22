import {Sequelize, Dialect} from 'sequelize';
import {dbConfig} from './dbConfig';

export const dbConnector = new Sequelize({
  database: dbConfig.database,
  username: dbConfig.user,
  password: dbConfig.password,
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect as Dialect,
});
