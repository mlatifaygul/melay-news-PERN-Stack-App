const router = require('express').Router()
const { getUser, addUser, getOne } = require('../controllers/user/user')

router.get('/', getUser)
router.get('/:id', getOne)
router.post('/add', addUser)

module.exports = router