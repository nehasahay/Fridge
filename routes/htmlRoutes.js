// html routes
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