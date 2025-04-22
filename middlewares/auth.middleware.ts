import { Request, Response, NextFunction } from "express";

export const isAdminAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req.session as any).admin) {
    next();
  } else {
    res.redirect("/admin/admin-login");
  }
};
