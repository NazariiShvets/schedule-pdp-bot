import {db} from "../db";
import {Model} from "sequelize";

type IClassroom = {
    id?: number
}

class Classroom extends Model<IClassroom> {
}

Classroom.init({}, {
    sequelize: db,
    modelName: 'Classroom',
    tableName: 'classroom',
});

export {Classroom,IClassroom}