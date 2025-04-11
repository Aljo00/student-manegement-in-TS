// ========================================================================================
// RENDER HOME PAGE
// ========================================================================================
// This function renders the home page so student can visit thsi page after login.
// ========================================================================================
export const renderHomePage = (req: any, res: any) => {
    try {
        return res.render("student/home")
    } catch (error) {
        console.error("Error rendering home page");
        return res.status(500).send("Internal Server Error")
    }
}

// ========================================================================================
// RENDER STUDENT LOGIN PAGE
// ========================================================================================
// This function renders the student login page for students to log in to the system.
// ========================================================================================
export const renderLoginPage = (req: any, res: any) => {
  try {
    return res.render("student/login");
  } catch (error) {
    console.error("Error rendering home page:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// ========================================================================================
// HANDLE LOGIN
// ========================================================================================
// This function checks if the student exists in the database and allows them to access the
// home page if they have a valid account.
// ========================================================================================
export const handleLogin = (req: any, res: any) => {
  console.log("sdfsdfsdf");
  try {
    const { email, password } = req.body;

    console.log(email, password);

    ///

    return res.render("student/home");
  } catch (error) {
    console.error("Error in Login student");
    return res.status(500).send("Internal Server Error");
  }
};

// ========================================================================================
// RENDER STUDENT SIGNUP PAGE
// ========================================================================================
// This function renders the student signup page for students to create new account.
// ========================================================================================
export const renderSignupPage = (req: any, res: any) => {
    try {
        return res.render('student/signup')
    } catch (error) {
        console.error("Error in rendering signup page");
        return res.status(500).send("Internal Server Error")
    }
}

// ========================================================================================
// HANDLE SIGNUP
// ========================================================================================
// This function allow the new student to create a new account.
// ========================================================================================
export const handleSignup = (req: any, res: any) => {
    try {
        const {email, password, cpassword } = req.boy;

        console.log(email, password, cpassword)
        
    } catch (error) {
        console.error("Error in Sign up new student");
        return res.status(500).send("Internal Server Error")
    }
}

// ========================================================================================
// HANDLE LOGOUT
// ========================================================================================
// This function allow the student to log out to their account.
// ========================================================================================
export const handleLogout = (req: any, res: any) => {
    try {

        
    } catch (error) {
        console.error("Error in log out student");
        return res.status(500).send("Internal Server Error")
    }
}
