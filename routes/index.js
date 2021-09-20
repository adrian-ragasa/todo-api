const router = require('express').Router()
const todoRoute = require('./todo.route.js')

router.use(todoRoute)

module.exports = router