const { Client } = require("pg");

// Load environment variables from .env file
require('dotenv').config();

// Database connection configuration using environment variables
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

// Create a new PostgreSQL client
const clientPostgre = new Client(dbConfig);

// Connect to the database
clientPostgre
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });

  module.exports = clientPostgre;