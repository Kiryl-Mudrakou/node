import { Sequelize, Dialect } from 'sequelize';
import { dbConfig } from './dbConfig';

const dbConnector = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect as Dialect,
  }
);

dbConnector.authenticate().then(
  success => {
    console.log('success', success);
  },
  error => {
    console.log('error', error);
  }
);

export {dbConnector}