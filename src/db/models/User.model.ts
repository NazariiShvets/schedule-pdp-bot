import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import {
  Callbacks,
  CreatePairSteps,
  DAYS,
  DeletePairSteps,
  PAIRS_TIME,
  UpdatePairSteps,
} from "../../telegram/types";

type IUser = {
  id?: number;
  telegramId: number;
  firstName: string;
  lastName?: string;
  state: IState;
};

type IUserModel = Omit<IUser, "state"> & { state: string };

type IState = {
  state: Callbacks | CreatePairSteps | UpdatePairSteps | DeletePairSteps;
  day?: DAYS;
  pair?: PAIRS_TIME;
  subject?: string;
  teacher?: string;
};

class User extends Model<IUserModel> {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telegramId: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "User", tableName: "users" }
);

export { User, IUser, IState, IUserModel };
