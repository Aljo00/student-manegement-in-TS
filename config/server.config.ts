import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.config";
dotenv.config();


export const startServer = async (app: any) => {
    await connectDB();
    app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`)
    })
}