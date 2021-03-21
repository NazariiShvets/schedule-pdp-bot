import { Sequelize } from "sequelize";
import { dbHost, dbName, dbPassword, dbUser } from "../config";

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});

export { db };
