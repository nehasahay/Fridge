const model = require("../models");
const User = model.User;
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function (app) {
  // Source: https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
  function isValidCookie(uuid) {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    return (uuid && regex.test(uuid));
  }


  app.post("/signup", (req, res) => {
    // Salt and hash the user's password
    bcrypt.hash(req.body.password, saltRounds, (error, value) => {
      User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: value
      }).then(result => {
        res.cookie("id", result.id, cookieOptions);
        res.cookie("fullName", result.fullname, cookieOptions);
        res.redirect("/");
      });
    });
  });


  app.post("/login", (req, res) => {
    // Find the user's hash
    User.findAll({
      attributes: ["id", "fullname", "email", "password"],
      where: {
        "email": req.body.email
      }

    }).then(results => {
      // Compare hashes to verify the user
      bcrypt.compare(req.body.password, results[0].password, (error, isMatch) => {
        if (isMatch) {
          if (!req.cookies.cookieName) {
            res.cookie("id", results[0].id, cookieOptions);
            res.cookie("fullName", results[0].fullname, cookieOptions);
          }
          res.redirect("/");
          // TODO: If the username or password does not match, display an error message
        } else {
          res.redirect("/");
        }
      });
    });
  });


  app.patch("/update-profile_:id", (req, res) => {
    const id = req.cookies["id"];
    const fullName = req.cookies["fullName"];

    // Display homepage if the user is not logged in or does not have a valid cookie
    if (!isValidCookie(id)) {
      res.render("index");

      // Only the user can edit their profile
    } else if (req.params.id !== id) {
      res.redirect("/");
    } else {
      User.update({
        fullname: req.body.fullname,
        email: req.body.email
      }, {
        where: {
          id: req.params.id
        }

      }).then(results => {
        res.cookie("fullName", req.body.fullname);
        res.redirect("/");
      });

    }
  });


  app.patch("/update-password_:id", (req, res) => {
    const id = req.cookies["id"];
    const fullName = req.cookies["fullName"];

    if (!isValidCookie(id)) {
      res.render("index");

      // Only the user can edit their password
    } else if (req.params.id !== id) {
      res.redirect("/");
    } else {
      // Find the user's hash
      User.findAll({
        attributes: ["password"],
        where: {
          id: req.params.id
        }

      }).then(results => {
        // Verify the user
        bcrypt.compare(req.body.password_current, results[0].password, (error, isMatch) => {
          if (isMatch) {
            // Salt and hash the new password
            bcrypt.hash(req.body.password_new, saltRounds, (error, password) => {
              User.update({
                password
              }, {
                "where": {
                  "id": req.params.id
                }
              });
            });
          }
        });
      }).then(result => {
        res.redirect("/");
      });
    }
  });

  app.delete("/delete-account_:id", (req, res) => {
    const id = req.cookies["id"];
    const fullName = req.cookies["fullName"];

    if (!isValidCookie(id)) {
      res.render("index");

    } else if (req.params.id !== id) {
      res.redirect("/");
    } else {
      User.destroy({
        where: {
          id: req.params.id
        }
      }).then(results => {
        res.clearCookie("id");
        res.clearCookie("fullName");
        res.redirect("/");
      });
    }
  });
};