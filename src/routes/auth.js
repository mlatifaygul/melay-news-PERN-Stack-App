const router = require('express').Router()
const { getUser } = require('../controllers/user/auth')

router.get('/', getUser)

module.exports = router