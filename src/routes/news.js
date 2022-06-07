const router = require('express').Router();
const {
    getNews, addNews
} = require('../controllers/news/news')

router.get('/', getNews)
router.post('/add', addNews)

module.exports = router