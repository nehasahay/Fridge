// Recipe Controller
// Steps
// 1. Send user recipes (deliminated by spaces) to controller
// 2. recipes are split into individual search terms are executed against the API stack starting with the public API (Edamame)
// 3. For each recipe passed the following happens
//     a. recipe is passed to recipe API (EDAMAME)
//     b. results of edamame (recipe_uri, recipe_label, recipe_img, ... n) is stored as array
//     c. recipe is passed to pairing db
//     d. result of the pairing db (wine_type) is then pass to wine API (SNOOTH)
//     e. results of the wine API (wine_uri, wine_label, wine_img ... n) is stored as array
//     f. results for each search (edamame, wine) are combined and sent as object back to be created as a card
// 4. If the use saves the recipe ONLY the recipe_uri, and wine_uri are saved to the database
// 5. when the user logs in the page is loaded another api will read the db and retrieve the recipe_uri, and wine_uri(s) for the user
// 6. another API will decompile the uri as JSON and re-create the "card" object to be sent to the FE as a list of users saved cards
// 7. A favorite flag is included. if the user selects on favorite the db record is flagged and sorted to the top
// KEYS

const AM_APP_ID
const AM_APP_KEY
const WN_A_KEY

// TEST RECIPES
const useringredients = ["eggs", "bacon"]

// RECIPES
var userid
var recipe_label = []
var recipe_image = []
var recipe_uri = []

// PAIRING
var winetypes = []

// WINES
var wine_label = []
var wine_img = []
var wine_uri = []

// SAVED
var saved_recipes = []

// CARDS
var saved_recipes = []

// fetch recipes
function fetchrecipes() {

    $.ajax({
            type: "GET",
            url: "https://api.edamam.com/search?q=" + useringredients[i] + "&app_id=" + AM_APP_ID + "&app_key=" + AM_APP_KEY,
            dataType: "json"
        })
        .done(function (response) {
            console.log(response)
            for (var i = 0; i < 3; i++) {

                recipe_label.push(response.hits[i].recipe.label)
                recipe_image.push(response.hits[i].recipe.image)
                recipe_uri.push(response.hits[i].recipe.uri)
            }
        })
}

// compare recipes to wine types 

function fetchtypes() {
    connection.query("SELECT * FROM pairing WHERE ? = ?", [useringredients.len[i]], [ingredient], function (err, result) {
        if (err) {}
        winetypes.push(res[i].wine_type)
        res.json({
            id: result
        });
    });

}

// fetch wine types from matched recipes

function fetchwines() {

    $.ajax({
            type: "GET",
            url: "http://api.snooth.com/wines/?q=" + wine_type[i] + "&akey=" + WN_A_KEY + "&s=sr",
            dataType: "json"
        })
        .done(function (response) {
            console.log(response)
            for (var z = 0; z < 3; z++) {

                wine_label.push(response.wines[i].name)
                wine_img.push(response.wines[i].image)
                wine_uri.push(response.wines[i].link)
            }
        })
}

// save recipes. uri only. why store anything else -- low overhead. we will build the cards leveraging the uri's

function saverecipes() {

    connection.query("UPDATE * pairing SET ?, ?", [recipe_uri.len[i]], [wine_uri.len], function (err, result) {

        if (err) {}
    });
}

// load recipes. uri only. we will pull the required objects from the uri via a deconstructor api

function loadrecipes() {

    connection.query("SELECT * FROM recipes userid = ?", [bcrypt.user.id], function (err, result) {
        if (err) {}

        saved_recipes.push(res[i].recipe_uri + " " + res[i].wine_uri)

    });

}

// now we build the cards and pass it back to the FE copleted 

function loadcards() {

    $.ajax({
        type: "GET",
        url: "/cards/",
        dataType: "json"
    })
    .done(function (response) {
        console.log(response)
        for (var i = 0; i < 3; i++) {
            
            var card = [
            saved_recipes.recipe_uri,
            saved_recipes.recipe_label,
            saved_recipes.recipe_img,
            saved_recipes.wine_label,
            saved_recipes.wine_img 
            ]
            card
        }
    })

}

// flag favorite then sort by favorite (FE)
function setfavorite() {

    connection.query("UPDATE recipes SET isFavorite = 'true' WHERE ? = userid AND id = ?", [bcrypt.user.id], [card.button.id], function (err, result) {
        if (err) {}
    });
}

// unflag favorite the sort by favorite (FE)
function resetfavorite() {

    connection.query("UPDATE recipes SET isFavorite = 'false' WHERE ? = userid AND id = ?", [bcrypt.user.id], [fav.button.id], function (err, result) {
        if (err) {}
    });
}

// delete recipies

function deleterecipes() {

    connection.query("DELETE * FROM recipes WHERE userid = ? and ?", [bcrypt.user.id], [fav.button.id], function (err, result) {
        if (err) {}

    });
}

// delete users

function deleteuser() {

    connection.query("DELETE FROM users AS a INNER JOIN recipe AS b ON a.userid = b.userid WHERE a.userid = ?", [bcrypt.user.id], [deleteme.button.id], function (err, result) {
        if (err) {}
      
    });
}

// function deleteuser() {

//     connection.query("DELETE FROM users AS a INNER JOIN recipe AS b ON a.userid = b.userid WHERE a.userid = ?", [bcrypt.user.id], [deleteme.button.id], function (err, result) {
//         if (err) {}
      
//     });
// }