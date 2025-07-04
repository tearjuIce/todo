import 'dotenv/config';

// Database connection configuration using environment variables
const dbConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "postgres",
    DB_PORT: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default dbConfig