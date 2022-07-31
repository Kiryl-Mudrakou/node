import { Model, DataTypes } from 'sequelize';
import { dbConnector } from '../db/dbConnect';
import { IPermission } from '../interfeces/IUsers';

export class Permission extends Model<IPermission> implements IPermission {
  public userId!: number;
  public groupId!: number;
}
Permission.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'groups',
      key: 'id'
    }
  }
}, {
  tableName: 'userGroup',
  sequelize: dbConnector
});
