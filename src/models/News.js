const db = require('../db/db-config');


const findNews = () => {
    return db('news')
}
const addNews = (addNews) => {
    return db("news")
    .insert(addNews, "id")
    .then(([id]) => {
      return db("news").where({ id }).first();
    });
}
module.exports = {
    findNews, addNews
};