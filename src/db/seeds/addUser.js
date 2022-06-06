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
    {userId: 4, name:"Sena", lastName: "Güven", email: 'sena@mail.com', password: 444},
  ]);
};
