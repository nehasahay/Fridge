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

    // Load example page and pass in an example by id
    app.get("/recipe/:id", (req, res) => {
        res.send(recipe({
            // insert data stuff here, e.g. ingredients
            stuff: JSON.stringify(sendInfo)
        }));
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
                // if (response.data.hits.length > 0) {
                //     for (recipe of response.data.hits) {
                //         console.log(recipe.recipe);
                //     };
                // };
                // console.log(response.data.hits);
                // pug.renderFile("./views/search.pug", {recipes: response.data.hits.length})
                console.log(response.data.hits);
                console.log(response.data.hits.length);
            }).catch(error => {
                console.log(error)
            });
        res.render("search");
    });

    app.get("/user/:id", (req, res) => {
        res.send(user({
            // insert data stuff here, i.e. user profile
        }));
    });

    app.get("/login", (req, res) => {
        res.send(login({

        }));
    });

    app.get("/signup", (req, res) => {
        res.send(signup({}));
    });
};