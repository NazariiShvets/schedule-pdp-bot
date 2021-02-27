import dotenv from "dotenv";

const result: dotenv.DotenvConfigOutput = dotenv.config();
if (result.error) throw new Error("DoteEnv error");

const PORT: string | number = process.env.PORT || 3000;
const dbPassword: string = process.env.DB_PASSWORD!;
const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;

export { dbName, dbPassword, dbUser, PORT };
