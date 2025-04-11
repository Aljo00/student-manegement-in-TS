import express from "express";
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

router.get("/admin-login", renderAdminLoginPage);
router.post("/admin-login", handleAdminLogin)

router.get("/dashboard", renderDashboardPage);
router.post("/add-student", handleAddNewStudent);
router.post("/edit-student", handleEditStudent);
router.post("/delete-student", handleDeleteStudent);

router.post("/admin-logout", handleAdminLogout);


export default router;
