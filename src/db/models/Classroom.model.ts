import { DataTypes, Model } from "sequelize";
import { db } from "../db";

interface IClassroom {
  id?: number;
  classroom: string;
  faculty?: string;
}

class Classroom extends Model<IClassroom> {}

Classroom.init(
  {
    classroom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faculty: DataTypes.STRING,
  },
  { sequelize: db, modelName: "Classroom", tableName: "classrooms" }
);

export { Classroom, IClassroom };
