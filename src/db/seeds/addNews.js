/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('news').del()
    await knex('news').insert([
      {newsId: 1, title: "Deneme", author: 1,  news_image: 'img2.png',},
      {newsId: 2, title: "Deneme2", author: 2, news_image: 'img.png'},
      {newsId: 3, title: "Deneme3", author: 3, news_image: 'img3.png'}
    ]);
  };
  