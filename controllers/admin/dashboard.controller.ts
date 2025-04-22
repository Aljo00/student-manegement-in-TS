import { Request, Response } from "express";
import { Op } from "sequelize";
import User from "../../models/user.models.js";

export const renderDashboard = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.search as string;
    let whereClause: any = { role: "student" };

    if (searchTerm) {
      whereClause = {
        ...whereClause,
        [Op.or]: [
          { name: { [Op.like]: `%${searchTerm}%` } },
          { email: { [Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const users = await User.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
    });

    res.render("admin/dashboard", { users });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).send("Internal Server Error");
  }
};
