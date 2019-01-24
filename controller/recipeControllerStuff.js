const axios = require("axios");
// mysql = require('mysql');
// var db = require("../models");

// This is for a single recipe.
// Use shareAs value. "shareAs": "http://www.edamam.com/recipe/serious-chocolate-easy-chocolate-pie-crust-recipe-3dc6d568c66a38e2f86d24a055c6de6d/-",
const recipeID = "3dc6d568c66a38e2f86d24a055c6de6d";
const queryURL = "http://www.edamam.com/ontologies/edamam.owl#recipe_" + recipeID;
const query = "chocolate asparagus";
const relevantInfo = {};
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;


// The salient info is label (title of recipe), image (thumbnail which is always the same size), url (original recipe instructions), shareAs (what we need to keep in db), ingredientLines/ingredients (ingredient list), calories/yield

axios.get("https://api.edamam.com/search", {
        params: {
            "q": query,
            "app_id": app_id,
            "app_key": app_key
        }
    })
    .then(function (response) {
        if (response.data.hits.length > 0) {
            for (recipe of response.data.hits) {
                // console.log(recipe.recipe);
            };
        };
        // console.log(response.data.hits.length);
    });

axios.get("https://api.edamam.com/search", {
        params: {
            "r": queryURL,
            "app_id": app_id,
            "app_key": app_key
        }
    })
    .then(function (response) {
        relevantInfo.title = response.data.label;
        relevantInfo.image = response.data.image;
        relevantInfo.ingredients = response.data.ingredientLines;
        relevantInfo.calories = response.data.calories;
        relevantInfo.servings = response.data.yield;
        relevantInfo.recipeURL = response.data.url;
        relevantInfo.recipe = response.data.source;
        relevantInfo.image = response.data.image;
        // console.log(relevantInfo);
        // relevantInfo.winepair = getwinepairs (response.data.label[5]);
    })
    .catch(function (error) {
        console.log(error);
    });

//sends too soon, object not yet populated. use set timeout/async-await maybe
module.exports = relevantInfo;


// var getwinepairs = function(ingredient){

//         db.Pairings.findOne({
//             where: {
//                 ingredient: ingredient
//             }
//         })
// .then(function(result) {
//     return res.json(result);



//     axios.get("https://api.edamam.com/search", {
//         params: {
//             "r": queryURL,
//             "app_id": app_id,
//             "app_key": app_key
//         }
//     })
//     .then(function (response) {
//         WineInfo.title = response.data.label;
//         WineInfo.image = response.data.image;
//         WineInfo.ingredients = response.data.ingredientLines;
        
//         // console.log(relevantInfo);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });





//   });
        
// };


