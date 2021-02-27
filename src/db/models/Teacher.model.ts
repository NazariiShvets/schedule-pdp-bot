import { DataTypes, Model } from "sequelize";
import { db } from "../db";

interface ITeacher {
  id?: number;
  firstName: string;
  lastName: string;
  middleName: string;
  gradation?: string;
}

class Teacher extends Model<ITeacher> {}

Teacher.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gradation: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "Teacher", tableName: "teachers" }
);

export { Teacher, ITeacher };
