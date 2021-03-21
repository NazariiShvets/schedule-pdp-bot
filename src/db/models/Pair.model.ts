import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { PairType } from "../types";
import { User } from "./User.model";

interface IPair {
  id: number;
  subject: string;
  teacher: string;
  classroom: string;
  day: string;
  from: string;
  to: string;
  type: PairType;
  isOnline: boolean;
  user_id: number;
  url?: string;
}

class Pair extends Model<IPair> {}

Pair.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classroom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    to: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isOnline: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    url: DataTypes.STRING,

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        // @ts-ignore
        model: User,
        key: "id",
      },
    },
  },
  { sequelize: db, modelName: "Pair", tableName: "pairs" }
);

export { Pair, IPair };
