import {DataTypes, Model} from "sequelize";
import {db} from "../db";

type ITeacher = {
    firstName: string
    lastName: string
    fatherName: string
    subject: string
    classroom: number
}

class Teacher extends Model<ITeacher> {
}

Teacher.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    subject: DataTypes.STRING,
    classroom: DataTypes.INTEGER
}, {
    sequelize: db,
    modelName: 'Teacher',
    tableName: 'teacher',
})

export {Teacher, ITeacher}