const db = require('../db/db-config');


function findNews() {
    return db('news')
}

module.exports = {
    findNews,
};
