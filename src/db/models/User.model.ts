import { DataTypes, Model } from "sequelize";
import { db } from "../db";

interface IUser {
  id?: number;
  telegramId: number;
  firstName: string;
  lastName: string;
}

class User extends Model<IUser> {}

User.init(
  {
    telegramId: DataTypes.NUMBER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },
  { sequelize: db, modelName: "User", tableName: "users" }
);

export { User, IUser };
