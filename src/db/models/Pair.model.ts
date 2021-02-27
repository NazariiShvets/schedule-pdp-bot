import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { Teacher } from "./Teacher.model";
import { Classroom } from "./Classroom.model";
import { PairType } from "../types";

interface IPair {
  id?: number;
  subject: string;
  teacher_id: number;
  classroom_id: number;
  day: string;
  from: string;
  to: string;
  type: PairType;
  isOnline: boolean;
  url?: string;
}

class Pair extends Model<IPair> {}

Pair.init(
  {
    subject: {
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
    teacher_id: {
      type: DataTypes.NUMBER,
      references: {
        // @ts-ignore
        model: Teacher,
      },
    },
    classroom_id: {
      type: DataTypes.NUMBER,
      references: {
        // @ts-ignore
        model: Classroom,
      },
    },
  },
  { sequelize: db, modelName: "Pair", tableName: "pairs" }
);

export { Pair, IPair };
