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
import { authenticate } from "../middleware/student.middleware";

router.get("/", authenticate, renderHomePage);
router.get("/login", authenticate, renderLoginPage);
router.post("/login", authenticate, handleLogin);

router.get("/signup", authenticate, renderSignupPage);
router.post("/signup", authenticate, handleSignup);

router.get("/home", authenticate, renderHomePage);
router.post("/logout", authenticate, handleLogout);


export default router;
