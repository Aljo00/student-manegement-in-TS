import bcrypt from "bcryptjs";
import { ADMIN_CREDENTIALS } from "../../constants/admin.constants.js";
import User from "../../models/user.models";
import { log } from "console";
// ========================================================================================
// RENDER ADMIN LOGIN PAGE
// ========================================================================================
// This function renders the admin login page.
// ========================================================================================
export const renderAdminLoginPage = async (req: any, res: any) => {
  try {
    const users = await User.findAll({
      where: {
        role: "student",
      },
      order: [["createdAt", "DESC"]],
    });
    return res.render("admin/login", { msg: null, users });
  } catch (error) {
    console.error("Error rendering admin login page");
    return res.status(500).send("Internal Server Error");
  }
};

// ========================================================================================
// GET ADMIN
// ========================================================================================
// This function allow the admin to login to the dashboard.
// ========================================================================================
export const handleAdminLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    console.log("Admin login data", req.body); 

    if (!email || !password) {
      const msg = "All fields are required!";
      return res.render("admin/login", { msg });
    }

    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      (req.session as any).admin = {
        name: ADMIN_CREDENTIALS.name,
        email: ADMIN_CREDENTIALS.email,
      };
      return res.redirect("/admin/dashboard");
    }

    return res.render("admin/login", { msg: "Invalid email or password!!" });
  } catch (error) {
    console.error("Error logging in as admin", error);
    return res.status(500).send("Internal Server Error");
  }
};

// ========================================================================================
// HANDLE LOGOUT
// ========================================================================================
// This function allow the admin to logout from their account.
// ========================================================================================

export const handleAdminLogout = (req: any, res: any) => {
  try {
    delete (req.session as any).admin;

    return res.redirect("/admin/admin-login");
  } catch (error) {
    console.error("Error loggin out admin");
    return res.status(500).send("Internal Server Error");
  }
};
