exports.seed = function (knex) {
    // Inserts seed entries
    return knex("users").insert([
        {
            first_name: "alberta",
            last_name: "charleson",
            email: "accountholder0@example.com",
            phone: "1112225555",
        },
    ]);
};
