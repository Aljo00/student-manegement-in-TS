import bcrypt from "bcryptjs"
import User from "../../models/user.models";

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
    return res.render("student/login", { msg: null });
  } catch (error) {
    console.error("Error rendering home page:", error);
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
      return res.render('student/signup',  { msg: null })
  } catch (error) {
      console.error("Error in rendering signup page");
      return res.status(500).send("Internal Server Error")
  }
}



// ========================================================================================
// HANDLE LOGIN
// ========================================================================================
// This function checks if the student exists in the database and allows them to access the
// home page if they have a valid account.
// ========================================================================================
export const handleLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      const msg = "All fileds are required!!";
      return res.render("student/login", { msg });
    }

    const existingUser = await User.findOne({ where: { email: email, role: 'student' } })
    if(!existingUser) {
      const msg = "Invalid email or user not found!!";
      return res.render("student/login", { msg });
    }
    
    const isMatch = await bcrypt.compare(password, existingUser.getDataValue('password'));

    if(!isMatch) {
      const msg = "Invalid password!!";
      return res.render("student/login", { msg });
    }

    const userData = existingUser.get();

        (req.session as any).student = {
          name: userData.name,
          email: userData.email,
        };

    return res.redirect("/home");
  } catch (error) {
    console.error("Error in Login student");
    return res.status(500).send("Internal Server Error");
  }
};



// ========================================================================================
// HANDLE SIGNUP
// ========================================================================================
// This function allow the new student to create a new account.
// ========================================================================================
export const handleSignup = async (req: any, res: any) => {
  try {
      const { name, email, password, cpassword } = req.body;

      if(!name || !email || !password || !cpassword) {
          const msg = "All fields are required";
          return res.render("student/signup", { msg })
      }

      if(password !== cpassword) {
        const msg = "Password dose not match!!";
        return res.render("student/signup", { msg })
      }
    
      const existingUser = await User.findOne({ where: { email } })
      if (existingUser) {
        const msg = "Email alredy in use!!"
        return res.render("student/signup", { msg })
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword })

      const userData = newUser.get();

        (req.session as any).student = {
          name: userData.name,
          email: userData.email,
        };

      
      return res.redirect("/home");
  } catch (error) {
      console.error("Error in Sign up new student", error);
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
      delete (req.session as any).student;

      return res.redirect("/login");
    } catch (error) {
        console.error("Error in log out student");
        return res.status(500).send("Internal Server Error")
    }
}
