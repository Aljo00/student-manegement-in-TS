import express from "express";
import { isAdminAuthenticated } from "../middlewares/auth.middleware.js";
import {
  handleAdminLogin,
  handleAdminLogout,
  renderAdminLoginPage,
} from "../controllers/admin/auth.controller.js";
import { renderDashboard } from "../controllers/admin/dashboard.controller.js";
import {
  handleAddNewStudent,
  handleEditStudent,
  handleDeleteStudent,
} from "../controllers/admin/student.controller.js";

const router = express.Router();

router.get("/admin-login", renderAdminLoginPage);
router.post("/admin-login", handleAdminLogin);
router.get("/logout", handleAdminLogout);

// Protected routes
router.use(isAdminAuthenticated);
router.get("/dashboard", renderDashboard);
router.post("/add-student", handleAddNewStudent);
router.post("/edit-student", handleEditStudent);
router.post("/delete-student", handleDeleteStudent);

export default router;
