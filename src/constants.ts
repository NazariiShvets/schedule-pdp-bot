import dotenv from 'dotenv';

const result: dotenv.DotenvConfigOutput = dotenv.config();
if (result.error) throw new Error('DoteEnv error');

const DB_NAME: string = process.env.DB_NAME!;
const DB_USER: string = process.env.DB_USER!;
const DB_PASSWORD: string = process.env.DB_PASSWORD!;

export {DB_NAME,DB_USER,DB_PASSWORD}