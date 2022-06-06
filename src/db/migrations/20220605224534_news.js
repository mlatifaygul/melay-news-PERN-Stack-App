/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('news', table => {
        table.increments('newsId');
        table.string('title').notNullable();
        table.integer('author').unsigned();
        table.string('news_image');
        table.foreign('author').references('user.userId').onUpdate('CASCADE').onDelete('CASCADE')
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