// html routes
<<<<<<< HEAD
const db = require("../models");

module.exports = function(app) {

  app.get("/api/savedrecipes", function(req, res) {
    db.findrecipes.findAll({}).then(function(dbfindrecipes) {
      res.json(findrecipes);
    });
  });

  app.post("/api/recipe", function(req, res) {
    db.findrecipes.createrecipes({
      recipe: req.body.text,
    }).then(function(dbfindrecipes) {
      res.json(dbfindrecipes);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.delete("/api/findrecipess/:id", function(req, res) {
    db.findrecipes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbfindrecipes) {
      res.json(dbfindrecipes);
      res.redirect('/');
    });
  });

  app.put("/api/findrecipess", function(req, res) {
    db.findrecipes.update({
      recipe_url: req.body.recipe_text,
      wine_url: req.body.wine_text
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbfindrecipes) {
      res.json(dbfindrecipes);
    })
    .catch(function(err) {
      res.json(err);
    });
  });
};
=======
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
>>>>>>> origin
