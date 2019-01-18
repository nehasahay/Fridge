// html routes
// var db = require("../models");
const pug = require("pug"),
    index = pug.compileFile("./views/index.pug"),
    recipe = pug.compileFile("./views/recipe.pug"),
    user = pug.compileFile("./views/user.pug"),
    login = pug.compileFile("./views/login.pug"),
    signup = pug.compileFile("./views/signup.pug");


module.exports = app => {
    // Load index page
    app.get("/", (req, res) => {
        // if (!req.user) {
        //     res.redirect("/login");
        // };
        res.send(index({}));
    });

    // Load example page and pass in an example by id
    app.get("/recipe/:id", (req, res) => {
        res.send(recipe({
            // insert data stuff here, e.g. ingredients
        }));
    });

    app.get("/user/:id", (req, res) => {
        res.send(user({
            // insert data stuff here, i.e. user profile
        }));
    });

    app.get("/login", (req, res) => {
        res.send(login({}));
    });

    app.get("/signup", (req, res) => {
        res.send(signup({}));
    });
};