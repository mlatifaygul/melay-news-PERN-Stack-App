/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {name:"Fatih", lastName: "Sarı", email: 'fatih@mail.com', password: 111},
    {name:"Yaman", lastName: "Güneş", email: 'yaman@mail.com', password: 222},
    {name:"Kaan", lastName: "Torus", email: 'kaan@mail.com', password: 333},
    {name:"Fatma", lastName: "Kus", email: 'fatma@mail.com', password: 444},
    {name:"Fatmaa", lastName: "Kuss", email: 'ffatma@mail.com', password: 4444}
    
  ]);

  await knex('news').del()
  await knex('news').insert([
    {title: 'rowValue1', author: 1, news_image: "img1.png"},
    {title: 'rowValue2', author: 2, news_image: "img2.png"},
    {title: 'rowValue3', author: 3, news_image: "img3.png"}
  ]);
  
};
