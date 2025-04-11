import express from "express"
const router = express.Router();


import{ renderHomePage } from "../controllers/student/auth.controller.js";

router.get("/", renderHomePage)


export default router;