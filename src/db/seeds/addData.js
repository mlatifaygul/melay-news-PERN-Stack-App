/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {userId: 1, name:"Fatih", lastName: "Sarı", email: 'fatih@mail.com', password: 111},
    {userId: 2, name:"Yaman", lastName: "Güneş", email: 'yaman@mail.com', password: 222},
    {userId: 3, name:"Kaan", lastName: "Torus", email: 'kaan@mail.com', password: 333},
    {userId: 4, name:"Fatma", lastName: "Kus", email: 'fatma@mail.com', password: 444}
  ]);

  await knex('news').del()
  await knex('news').insert([
    {newsId: 1, title: 'rowValue1', author: 1, news_image: "img1.png"},
    {newsId: 2, title: 'rowValue2', author: 2, news_image: "img2.png"},
    {newsId: 3, title: 'rowValue3', author: 3, news_image: "img3.png"}
  ]);
  
};
