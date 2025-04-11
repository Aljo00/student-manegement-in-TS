// ========================================================================================
// RENDER DASHBOARD PAGE
// ========================================================================================
// This function reder the dashbord page.
// ========================================================================================
export const renderDashboardPage = (req: any, res: any) => {
    try {
        return res.render("admin/dashboard");
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
export const handleAddNewStudent = (req: any, res: any) => {
    try {
        
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
export const handleEditStudent = (req: any, res: any) => {
    try {
        
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
export const handleDeleteStudent = (req: any, res: any) => {
   try {
    
   } catch (error) {
      console.error("Error deleting the student");
      return res.status(500).send("Internal Server Error");
   }
}

