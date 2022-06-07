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

exports.addNews = async (req, res, next) => {

    try {
        const data = await News.addNews(req.body);
        console.log('Added')
        res.status(201).json(data)
    } catch (err) {
        next({
            statusCode: 500,
            errorMessage: "News Added Error !",
            err,
        })
    }


    // const addNews = req.body;
    // if (!addNews.title) {
    //     next({
    //         statusCode: 400,
    //         errorMessage: "Aktor eklemek icin name giriniz!",
    //     })
    // } else {
    //     News.addNews(addNews).then((added) => {
    //             res.status(201).json(added)
    //         })
    //         .catch(err => {
    //             next({
    //                 statusCode: 500,
    //                 errorMessage: "News Added Error !",
    //                 err,
    //             })

    //         })
    // }
}