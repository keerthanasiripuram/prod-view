import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../config/.env");

dotenv.config({ path: envPath });

if (!process.env) {
    console.error("Environment variables not loaded. Check the .env file path.");
    process.exit(1);
}

export const getEnv = (key: string) => {
    const value = process.env[key];
    console.warn("value",value)
    if (value) {
        return value;
    }
    else {
        throw new Error(`Environment variable ${key} is not set.`);
    }
};