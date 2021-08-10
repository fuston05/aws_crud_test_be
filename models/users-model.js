// USERS MODEL

const db = require("../database/db_config");

const add = (
    firstName,
    lastName,
    email,
    phone,
) => {
    return db("users").insert(
        {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
        },
        ["id"]
    );
};

const getUserById = (userId) => {
    return db("users").select("*").where({id: userId});
};

const getUserByEmail = (email) => {
    return db("users").where({email: email}).first();
};

const getUserByPhone = (phone) => {
    return db("users").select("*").where({phone: phone}).first();
};

module.exports = {add, getUserById, getUserByEmail, getUserByPhone};
