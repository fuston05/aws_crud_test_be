require("dotenv").config();

module.exports = {
    // for local machine development
    development: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false},
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./database/migrations",
        },
        seeds: {
            directory: "./database/seeds",
        },
    },

    // for dev deployed site
    // staging: {
    //     client: "postgresql",
    //     connection: {
    //         database: "my_db",
    //         user: "username",
    //         password: "password",
    //     },
    //     pool: {
    //         min: 2,
    //         max: 10,
    //     },
    //     migrations: {
    //         tableName: "knex_migrations",
    //     },
    // },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false},
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./database/migrations",
        },
        seeds: {
            directory: "./database/seeds",
        },
    },
};
