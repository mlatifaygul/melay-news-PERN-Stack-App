const News = require('../../models/News')

exports.getNews = async (req, res) => {
    News.findNews().then(news => {
        res.status(200).json(news)
    }).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error get news !",
            err
        })
    })
}