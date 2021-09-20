const ToDoModel = require("../models/todo.model")

module.exports = {
    getToDos,
    getToDoById,
    addToDo,
    updateToDo,
    deleteToDo
}

async function getToDos(req, res) {
    try {
        const todos = await ToDoModel.find({});
        res.status(200).send(todos)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function getToDoById(req, res) {
    try {
        const todo = await ToDoModel.findById(req.params.id);
        res.status(200).send(todo)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function addToDo(req, res) {
    try {
        const todoModel = new ToDoModel();
        todoModel.name = req.body.name;
        todoModel.description = req.body.description;
        todoModel.status = req.body.status;
        todoModel.date = new Date(Date.now() + (1000*60*60*24*1)).toLocaleDateString();

        await todoModel.save();
        res.status(200).send({ todo: todoModel })
    } catch (error) {
        res.status(400).send(error)
    }
}

async function updateToDo(req, res) {
    try {
        const todoModel = await ToDoModel.findById(req.params.id);
        todoModel.name = req.body.name;
        todoModel.description = req.body.description;
        todoModel.status = req.body.status;
        todoModel.date = new Date().toLocaleDateString();

        await todoModel.save();
        res.status(200).send({ todo: todoModel })
    } catch (error) {
        res.status(400).send(error)
    }
}

async function deleteToDo(req, res) {
    try {
        const todoModel = await ToDoModel.findById(req.params.id);
        await ToDoModel.deleteOne(todoModel);
        res.status(200).send({ todoDeleted: true })
    } catch (error) {
        res.status(400).send(error)
    }
}
