const mongoose=require('mongoose');

const Schema = mongoose.Schema;

var todoSchema=new mongoose.Schema({
    item: String,

})

let ToDoModel=mongoose.model('todo',todoSchema)

module.exports={
	ToDoModel
}
