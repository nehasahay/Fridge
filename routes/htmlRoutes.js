// html routes
// var db = require("../models");
const sendInfo = require("../controller/recipeControllerStuff.js");
const axios = require("axios");
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;
const pug = require("pug"),
    // index = pug.compileFile("./views/index.pug"),
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
        // res.send(index({}));
        res.render("index");
    });

    app.get("/search", (req, res) => {
        console.log(req.query.recipeSearch);
        axios.get("https://api.edamam.com/search", {
                params: {
                    "q": req.query.recipeSearch,
                    "app_id": app_id,
                    "app_key": app_key
                }
            })
            .then(function (response) {
                res.render("search", {results: response.data.hits});
            }).catch(error => {
                console.log(error);
            });
    });

    app.get("/login", (req, res) => {
        res.send(login({

        }));
    });

    app.get("/signup", (req, res) => {
        res.send(signup({}));
    });
};