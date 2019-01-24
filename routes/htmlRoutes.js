// html routes
var db = require("../models");
const sendInfo = require("../controller/recipeControllerStuff.js");
const axios = require("axios");
const path = require("path");
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;
const pug = require("pug"),
    // index = pug.compileFile("./views/index.pug"),
    recipe = pug.compileFile("./views/recipe.pug"),
    user = pug.compileFile("./views/user.pug");
// login = pug.compileFile("./views/login.pug"),
// signup = pug.compileFile("./views/signup.pug");


module.exports = app => {
    // Load index page
    app.get("/", (req, res) => {
        // if (!req.user) {
        //     res.redirect("/login");
        // };
        // res.render("index");
        res.redirect("/login");
    });

    // Load example page and pass in an example by id
    app.get("/recipe/:id", (req, res) => {
        res.send(recipe({
            // insert data stuff here, e.g. ingredients
            stuff: JSON.stringify(sendInfo)
        }));
    });

    app.get("/search", (req, res) => {
        // console.log(req.query.recipeSearch);
        const recipe = req.query.recipeSearch.split(' ')[0]

        db.Pairings.findOne({
                where: {
                    food_type: recipe
                }
            })
            .then(function (response) {
                // console.log(response.wine_type);

                axios.get("http://api.snooth.com/wines/?", {
                        params: {
                            "akey": process.env.AKEY,
                            "ip": req.connection.remoteAddress,
                            "q": response.wine_type,
                            "xp": process.env.XP,
                            "n": process.env.N
                        }
                    })
                    .then(function (response) {
                        // console.log(response.data.wines[0]);
                        // return (response.data.wines[0]);
                        let wineobject = response.data.wines[0]

                        axios.get("https://api.edamam.com/search", {
                                params: {
                                    "q": req.query.recipeSearch,
                                    "app_id": app_id,
                                    "app_key": app_key
                                }
                            })
                            .then(function (response) {
                                // console.log(wineobject)
                                res.render("search", {
                                    results: response.data.hits,
                                    wine: wineobject
                                })
                            }).catch(error => {
                                console.log(error);
                            });
                    });
            }).catch(error => {
                console.log(error);
            });
    });

    app.get("/index", (req, res) => {
        // console.log(req);
        res.render("index");
    })

    app.get("/user/:id", (req, res) => {
        res.send(user({
            // insert data stuff here, i.e. user profile
        }));
    });

    app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });

    app.get("/signup", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });

    app.get("/team", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/team.html"));
    });
};