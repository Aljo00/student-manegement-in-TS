export const renderHomePage = (req, res) => {
    try {
        return res.render("student/home");
    }
    catch (error) {
        console.error("Error rendering home page:", error);
        res.status(500).send("Internal Server Error");
    }
};
