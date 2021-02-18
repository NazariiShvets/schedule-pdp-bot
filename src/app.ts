import {db} from "./db";

db.authenticate().then(async () => {
    try {
        await db.sync({ force: false });
        console.log('Database connect');
    } catch (e) {
        console.error(e.message);
    }
});