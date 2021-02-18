import {Sequelize} from 'sequelize';
import {DB_NAME, DB_PASSWORD, DB_USER} from "./constants";

const db: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 15,
        min: 5,
        idle: 20000
    },
});

export {db}