const db = require('../db/db-config');


const findUser = () => {
    return db('user')
}

const addUser = (newUser) => {
    return db('user').insert(newUser, "id").then(([id]) => {
        return db('user').where({
            id
        }).first();
    });
}

const getOne = (id) => {
    return db('user').where('id', id).first()
}

module.exports = {
    findUser,
    addUser,
    getOne
};