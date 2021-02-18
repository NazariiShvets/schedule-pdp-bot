import {DataTypes, Model} from "sequelize";
import {enumToArray} from "../utils";
import {db} from "../db";


enum ESubjectType {
    LECTURE = 'LECTURE',
    PRACTICE = 'PRACTICE',
    LABORATORY = 'LABORATORY'
}

type IPair = {
    subject: string
    type: ESubjectType
    isOnline: boolean
    link?: string
    description: string
    pairNumber: number
    teacher_id: number
    classroom_id: number
}

class Pair extends Model<IPair> {
}


Pair.init({
    subject: DataTypes.STRING,
    type: {
        type: DataTypes.ENUM,
        values: enumToArray(ESubjectType),
        allowNull: false
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            //@ts-ignore
            model: Teacher,
            key: 'id',
        },
    },
    classroom_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            //@ts-ignore
            model: Classroom,
            key: 'id',
        },
    },
    isOnline: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT
    },
    pairNumber: {
        type: DataTypes.NUMBER
    }
}, {
    sequelize: db,
    modelName: 'Pair',
    tableName: 'pair',
})


export {IPair, ESubjectType, Pair}
