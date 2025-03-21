import pgPromise from "pg-promise";
import { getEnv } from "../utils/env.js";

const pgp=pgPromise()

const dbConfig={
  host: getEnv('DB_HOST'),
  port: Number(getEnv('DB_PORT')),
  database: getEnv('DB_NAME'),
  user: getEnv('DB_USER'),
  password: getEnv('DB_PASSWORD'),
  max: Number(getEnv('DB_MAX')),
  idleTimeoutMillis: Number(getEnv('DB_IDLE_TIMEOUT')),
  connectionTimeoutMillis: Number(getEnv('DB_CONNECTION_TIMEOUT')),
}

export  const db = pgp(dbConfig)

export const checkDbConnection = async (retries = 5, delay = 2000) => {
  console.log("Waiting for DB connection...");
  for (let i = 0; i < retries; i++) {
    try {
      await db.connect();
      console.log('Database connection established');
      return;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed. Error connecting to the database:`, error);
      if (i === retries - 1) {
        console.error('All retry attempts failed. Exiting...');
        process.exit(1);
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
};



