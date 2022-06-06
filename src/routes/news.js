const router = require('express').Router();
const {
    getNews
} = require('../controllers/news/news')

router.get('/', getNews)

module.exports = router