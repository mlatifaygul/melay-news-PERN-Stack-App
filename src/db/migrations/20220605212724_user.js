/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('user', table => {
        table.increments('userId');
        table.string('name').notNullable().unique();
        table.string('lastName').notNullable().unique();
        table.string('email').notNullable().unique();
        table.integer('password').notNullable();
        table.timestamps(true, true)
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user');
};