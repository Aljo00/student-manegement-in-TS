import bcrypt from "bcryptjs"
import User from "../../models/user.models"
// ========================================================================================
// RENDER ADMIN LOGIN PAGE
// ========================================================================================
// This function renders the admin login page.
// ========================================================================================
export const renderAdminLoginPage = async (req: any, res: any) => {
    try {
        const users = await User.findAll({
            where: {
              role: 'student'
            },
            order: [['createdAt', 'DESC']],
          });
        return res.render("admin/login", { msg: null, users })
    } catch (error) {
        console.error("Error rendering admin login page");
        return res.status(500).send("Internal Sever Error")
    }
}


// ========================================================================================
// GET ADMIN
// ========================================================================================
// This function allow the admin to login to the dashboard.
// ========================================================================================
export const handleAdminLogin = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            const msg = "All fields are required!"
            return res.render("admin/login", { msg })
        }

        const admin = await User.findOne({ where: { email: email, role: "admin" } })
        if(!admin) {
            const msg = "Invalid email or password!!";
            return res.render("admin/login", { msg })
        }

        const isCheck = await bcrypt.compare(password, admin.getDataValue('password'));

        if(!isCheck) {
            const msg = "Invalid email or password!!";
            return res.render("admin/login", { msg })
        }
        const userData = admin.get();

        (req.session as any).admin = {
            name: userData.name,
            email: userData.email,
        };

        return res.redirect("/admin/dashboard");
    } catch (error) {
        console.error("Error loggin to as admin", error);
        return res.status(500).send("Internal Server Error")
    }
}


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
}