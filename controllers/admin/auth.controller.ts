// ========================================================================================
// RENDER ADMIN LOGIN PAGE
// ========================================================================================
// This function renders the admin login page.
// ========================================================================================
export const renderAdminLoginPage = (req: any, res: any) => {
    try {
        return res.render("admin/login")
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
export const handleAdminLogin = (req: any, res: any) => {
    try {
        const { email, password } = req.body;

        console.log(email, password)

        return res.render("admin/dashboard")
    } catch (error) {
        console.error("Error loggin to as admin");
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
        
    } catch (error) {
        console.error("Error loggin out admin");
        return res.status(500).send("Internal Server Error");
    }
}