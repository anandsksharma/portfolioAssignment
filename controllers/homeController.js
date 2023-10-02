const homecontroller = (req, res) => {
    res.render("index", { title: "Home Page", message: "Welcome to the Home Page" })
};
export {homecontroller};