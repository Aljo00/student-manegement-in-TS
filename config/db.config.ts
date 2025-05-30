import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connection has been established successfully.");
    await sequelize.sync({ alter: true }); 
  } catch (error) {
    console.error("Unable to connect to the PostgreSQL database:", error);
    process.exit(1); 
  }
};
