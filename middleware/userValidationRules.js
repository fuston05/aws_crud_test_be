const {body} = require("express-validator");

const users = require("../models/users-model");

const minNameLen = 2;
const maxNameLen = 50;

const userValidationRules = [
    body("first_name", "Invalid first name")
        .escape()
        .trim()
        .toLowerCase()
        .notEmpty()
        .bail()
        .isAlpha()
        .bail()
        .isLength({min: minNameLen, max: maxNameLen}),

    body("last_name", "Invalid last name")
        .escape()
        .trim()
        .toLowerCase()
        .notEmpty()
        .bail()
        .isAlpha()
        .bail()
        .isLength({min: minNameLen, max: maxNameLen}),

    body("email", "Invalid email")
        .notEmpty()
        .bail()
        .trim()
        .toLowerCase()
        .escape()
        .isEmail()
        .bail(),

    body("email", "Email already in use").custom(async (value) => {
        const emailExists = await users.getUserByEmail(value);
        if (emailExists) {
            return Promise.reject();
        }
    }),

    body("phone", "Invalid phone number")
        .notEmpty()
        .bail()
        .trim()
        .isMobilePhone()
        .blacklist(" ()+-")
        .bail()
        .escape(),

    body("phone", "Phone already in use").custom(async (value) => {
        const phoneExists = await users.getUserByPhone(value);
        if (phoneExists) {
            return Promise.reject();
        }
    }),
];

module.exports = {userValidationRules};
