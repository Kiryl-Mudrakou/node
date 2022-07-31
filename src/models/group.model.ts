import { Model, DataTypes, CreationOptional, Optional  } from 'sequelize';
import { dbConnector } from '../db/dbConnect';
import { IGroup, Permission } from '../interfeces/IUsers';
import { User } from './user.model';

type GroupOptionalId = Optional<IGroup, 'id'>;

export class Group extends Model<IGroup,GroupOptionalId> implements IGroup {
  public id!:  CreationOptional<number>;
  public name!: string;
  public permissions!: Permission;

  static associate() {
    Group.belongsToMany(User, {
      through: 'userGroup'
    })
  }
}

Group.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permissions: {
    type: DataTypes.ENUM('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'),
    allowNull: false
  }
}, {
  tableName: 'groups',
  sequelize: dbConnector
});
