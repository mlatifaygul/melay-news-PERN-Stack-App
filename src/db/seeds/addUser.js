/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {userId: 4, name:"Fatih", lastName: "Sarı", email: 'fatih@mail.com', password: 111},
    {userId: 5, name:"Yaman", lastName: "Güneş", email: 'yaman@mail.com', password: 222},
    {userId: 6, name:"Kaan", lastName: "Torus", email: 'kaan@mail.com', password: 333}
  ]);
};
