export const authenticate = (req: any, res: any, next: any) => {
  try {
      const isAuthenticated = Boolean((req.session as any).admin);
      const path = req.originalUrl.toLowerCase();

      if (isAuthenticated && path.includes('/admin-login')) {
          return res.redirect('/admin/dashboard');
      }

      if (!isAuthenticated && !path.includes('/admin-login')) {
          return res.redirect('/admin/admin-login');
      }

      next();
  } catch (error) {
      console.error("Error in admin middleware", error);
      return res.status(500).send("Internal Server Error");
  }
};
