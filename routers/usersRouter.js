// USERS ROUTER

const express = require("express");
const router = express.Router();

// middleware
const {userValidationRules} = require("../middleware/userValidationRules");
const {validate} = require("../middleware/validate");

// model
const users = require("../models/users-model");

// create a new user
router.post("/create", userValidationRules, validate, async (req, res) => {
    users
        .add(
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.phone,
        )
        .then((response) => {
            return res.status(201).json({
                status: "201",
                message: "User was added successfully.",
                user_id: response[0].id,
            });
        })
        .catch((err) => {
            console.log("err: ", err);
            return res.status(500).json({error: err});
        });
});

module.exports = router;
