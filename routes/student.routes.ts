import express from "express";
const router = express.Router();

import {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  handleLogin,
  handleSignup,
  handleLogout
} from "../controllers/student/auth.controller";

router.get("/", renderLoginPage);
router.get("/login", renderLoginPage);
router.post("/login", handleLogin);

router.get("/home", renderHomePage)

router.get("/signup", renderSignupPage);
router.post("/signup", handleSignup)

router.post("/logout", handleLogout);

export default router;
