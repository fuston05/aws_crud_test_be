exports.up = function (knex) {
    return knex.schema.createTable("users", (tbl) => {
        tbl.increments("id");
        tbl.string("first_name").notNullable();
        tbl.string("last_name").notNullable();
        tbl.string("email").notNullable().unique();
        tbl.string("phone").notNullable().unique();
    });
};

exports.down = function (knex) {
    // drop in reverse order from which they are created
    return knex.schema.dropTableIfExists("users");
};
