const router = require('express').Router();
const controller = require('../controllers/todo.controller.js')

module.exports = router

router.get('/todos', controller.getToDos)
router.get('/todo/:id', controller.getToDoById)
router.post('/todo/add', controller.addToDo)
router.put('/todo/edit/:id', controller.updateToDo)
router.delete('/todo/delete/:id', controller.deleteToDo)