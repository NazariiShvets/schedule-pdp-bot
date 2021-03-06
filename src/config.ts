import dotenv from "dotenv";

dotenv.config();

const dbPassword: string = process.env.DB_PASSWORD!;
const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;
const dbHost: string = process.env.DB_ENDPOINT!;

export { dbName, dbPassword, dbUser, dbHost };
