const User = require('../../models/User')
const db = require('../../db/db-config');

// const isValidId = (req, res, next) => {
//     if (!isNaN(req.params.id)) return next();
//     next(new Error('Invalid ID'))
// }

// function validSticker(sticker) {
//     const hasTitle = typeof sticker?.name == 'string' && sticker?.name.trim() != '';
//     return hasTitle;
// }

exports.getUser = async (req, res) => {
    User.findUser().then(news => {
        res.status(200).json(news)
    }).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error get users!",
            err
        })
    })
}
exports.addUser = (req, res, next) => {
    const newUser = req.body;
    if (!newUser.name) {
        next({
            statusCode: 400,
            errorMessage: "Aktor eklemek icin name giriniz!",
        })
    } else {
        User.addUser(newUser)
            .then(added => { // Server error message
                res.status(201).json(added)
                console.log(newUser)
            }).catch(err => { // Database error message
                next({
                    statusCode: 500,
                    errorMessage: "Aktor eklerken hata olustu !",
                    err
                })
            })
    }
}

exports.getOne = async (req, res, next) => {
    User.getOne(req.params.id).then(single => {
        if (single) {
            res.status(200).json(single)
        } else {
            res.status(404);
            next(new Error('Not Found'))
        }
    }).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error get users!",
            err
        })
    })
}