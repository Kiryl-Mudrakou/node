import {Model, DataTypes, Optional, CreationOptional} from 'sequelize';
import { dbConnector } from '../db/dbConnect';
import { Group } from './group.model';
import { IUser } from '../interfeces/IUsers';

type UserOptionalId = Optional<IUser, 'id'>;

export class User extends Model<IUser, UserOptionalId> implements IUser {
  public id!: CreationOptional<number>;
  public login!: string;
  public password!: string;
  public age!: number;
  public isDeleted!: boolean;

  static associate() {
    User.belongsToMany(Group, {
      through: 'userGroup'
    })
  }
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'users',
  sequelize: dbConnector,
});

