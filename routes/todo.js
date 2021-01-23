var express = require('express');
var router = express.Router();
const { getToDos, addNewToDo,deleteToDo}=require('../controllers/todoController')


router.route('/')
.get(getToDos)
.post(addNewToDo)
.delete(deleteToDo)

module.exports=router