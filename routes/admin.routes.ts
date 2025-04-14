import express from "express";
import { authenticate } from "../middleware/admin.middleware";
import {
  handleAdminLogin,
  handleAdminLogout,
  renderAdminLoginPage,
} from "../controllers/admin/auth.controller";
import {
  handleAddNewStudent,
  handleDeleteStudent,
  handleEditStudent,
  renderDashboardPage,
} from "../controllers/admin/student.controller";
const router = express.Router();

router.get("/admin-login", authenticate, renderAdminLoginPage);
router.post("/admin-login", handleAdminLogin);

router.get("/dashboard", authenticate, renderDashboardPage);
router.post("/add-student", authenticate, handleAddNewStudent);
router.post("/edit-student", authenticate, handleEditStudent);
router.post("/delete-student", authenticate, handleDeleteStudent);

router.post("/admin-logout", authenticate, handleAdminLogout);


export default router;
