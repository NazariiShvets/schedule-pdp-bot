import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { PairType } from "../types";

interface IPair {
  id?: number;
  subject: string;
  teacher: string;
  classroom?: string;
  day: string;
  time: string;
  type?: PairType;
  isOnline?: boolean;
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
      allowNull: true,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isOnline: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize: db, modelName: "Pair", tableName: "pairs" }
);

export { Pair, IPair };
