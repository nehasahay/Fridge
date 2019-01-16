// html routes
// var db = require("../models");
const pug = require("pug");
const recipe = pug.compileFile("./views/recipe.pug");
const user = pug.compileFile("./views/user.pug");


module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
      res.send(pug.renderFile("./views/index.pug"));
    // db.Example.findAll({}).then(data => {
    //   pug.renderFile("index.pug", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });

//       // Compile template.pug, and render a set of data
// console.log(pug.renderFile('template.pug', {
//     name: 'Timothy'
//   }));
    // });
  });

  // Load example page and pass in an example by id
  app.get("/recipe/:id", (req, res) => {
    // db.Example.findOne({ where: { id: req.params.id } }).then(data => {
    //     pug.renderFile("recipe.pug", {
    //     example: dbExample
    //   });
    // });
    res.send(recipe({
        // insert data stuff here, e.g. ingredients
    }));
  });

  app.get("/user/:id", (req, res) => {
    // db.Example.findOne({ where: { id: req.params.id } }).then(data => {
    //     pug.renderFile("user.pug", {
    //     example: dbExample
    //   });
    // });
    res.send(user({
        // insert data stuff here, i.e. user profile
    }));
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    // pug.renderFile("404");
  });
};
