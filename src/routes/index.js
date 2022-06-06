const router = require('express').Router();

const user = require('./user');
const news = require('./news');

router.use('/admin', user)
router.use('/news', news);

module.exports = router;