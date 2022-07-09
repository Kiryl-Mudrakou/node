import { DataTypes } from 'sequelize';

const userModel = {
  login: { type: DataTypes.STRING, allowNull: false },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      validatePassword: function(value: string) {
        if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i.test(value)) {
          throw new Error("Password does not meets the requirements");
        }
      }
    }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 4, max: 130 }
  },
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false }
}

export {userModel};