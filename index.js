import express from "express";
import dotenv from "dotenv";
dotenv.config();
import studentRoute from "./routes/student.routes.js";
const app = express();
// app.set("views", "../views")
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;
app.use("/", studentRoute);
app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
});
