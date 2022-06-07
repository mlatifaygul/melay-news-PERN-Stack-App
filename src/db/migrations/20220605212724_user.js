/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('user', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('lastName').notNullable();
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