export const authenticate = (req: any, res: any, next: any) => {
    try {
      const isAuthenticated = Boolean((req.session as any).student);
      const path = req.originalUrl.toLowerCase();

      const authRoutes = ['/login', '/signup'];
  
      if (isAuthenticated && authRoutes.some(route => path.startsWith(route))) {
        return res.redirect('/home');
      }

      if (!isAuthenticated && !authRoutes.some(route => path.startsWith(route))) {
        return res.redirect('/login');
      }
  
      next();
    } catch (error) {
      console.error("Error in student middleware", error);
      return res.status(500).send("Internal Server Error");
    }
  };
  