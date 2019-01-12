/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipes", {
        recipe_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 1024]
            }
        },
        wine_pairing: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 1024]
            }
        },
        isFavorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    Recipes.associate = function (models) {
        Recipes.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recipes;
};