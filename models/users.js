/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("Users", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        }
    }, {
        freezeTableName: true
    });
    User.associate = function (models) {
        User.hasMany(models.Recipes, {
            onDelete: "cascade"
        });
    };

    return User;
};