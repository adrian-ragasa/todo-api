const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ToDo = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  status: String,
  date: String
});

const ToDoModel = mongoose.model('ToDo', ToDo);

module.exports = ToDoModel