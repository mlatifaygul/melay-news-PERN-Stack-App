/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('news', table => {
        table.increments('newsId');
        table.string('title').notNullable();
        table.string('authorName').unsigned();
        table.string('authorLastName').unsigned();
        table.string('news_image');
        table.foreign('authorName').references('user.name').onUpdate('CASCADE').onDelete('CASCADE')
        table.foreign('authorLastName').references('user.lastName').onUpdate('CASCADE').onDelete('CASCADE')
        table.timestamps(true, true)

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('news');
};