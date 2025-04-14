import { Op } from 'sequelize';
import bcrypt from "bcryptjs"
import User from "../../models/user.models";

// ========================================================================================
// RENDER DASHBOARD PAGE
// ========================================================================================
// This function reder the dashbord page.
// ========================================================================================
export const renderDashboardPage = async (req: any, res: any) => {
    try {
        const search = req.query.search || "";

        const users = await User.findAll({
          where: {
            role: 'student',
            name: {
              [Op.like]: `%${search}%`,
            },
          },
          order: [['createdAt', 'DESC']],
        });
          
        return res.render('admin/dashboard', { users });
    } catch (error) {
        console.error("Error rendering dashboard page");
        return res.status(500).send("Internal Server Error")
    }
}

// ========================================================================================
// ADD NEW STUDENT
// ========================================================================================
// This function reder the dashbord page.
// ========================================================================================
export const handleAddNewStudent = async (req: any, res: any) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("Name, email, and password are required!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword, 
            role: 'student',  
        });

        return res.redirect("/admin/dashboard");
    } catch (error) {
        console.error("Error creatign new student");
        return res.status(500).send("Internal Server Error")
    }
}

// ========================================================================================
// EDIT A STUDENT
// ========================================================================================
// This function reder the dashbord page.
// ========================================================================================
export const handleEditStudent = async (req: any, res: any) => {
    try {
        const { id, name, email } = req.body;

    if (!id || !name || !email) {
      return res.status(400).send("All fields are required.");
    }

    await User.update(
      { name, email },
      { where: { id } }
    );

    return res.redirect("/admin/dashboard");
    } catch (error) {
        console.error("Error edit the student.");
        return res.status(500).send("Internal Server Error");
    }
}

// ========================================================================================
// DELETE A STUDENT
// ========================================================================================
// This function reder the dashbord page.
// ========================================================================================
export const handleDeleteStudent = async (req: any, res: any) => {
   try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).send("Student ID is required!");
    }

    await User.destroy({
      where: { id }
    });

    return res.redirect("/admin/dashboard");
   } catch (error) {
      console.error("Error deleting the student");
      return res.status(500).send("Internal Server Error");
   }
}

