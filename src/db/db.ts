import { Sequelize } from "sequelize";
import { dbName, dbPassword, dbUser } from "../config";

const db: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  dialect: "postgres",
});

export { db };
