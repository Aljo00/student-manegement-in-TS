import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import session from "express-session"
import { startServer } from "./config/server.config.js"

dotenv.config()

import studentRoute  from "./routes/student.routes.js"
import adminRoute from "./routes/admin.routes.js"

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, 
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
    }
}));

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/", studentRoute)
app.use("/admin", adminRoute)


startServer(app);