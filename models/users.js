/* eslint-disable camelcase */
const bcrypt = require("bcrypt");
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("Users", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-z\s-']+$/i,
                    msg: "Only letters, spaces, hyphens, and apostrophes are allowed."
                },
                len: {
                    args: [1, 100],
                    msg: "Your name cannot exceed 100 characters."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg : "Please enter a valid email."
                },
                len: {
                    args: [1, 75],
                    msg: "Your email cannot exceed 75 characters."
                }
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
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Recipes, {
            onDelete: "cascade"
        });
    };

    return User;
};