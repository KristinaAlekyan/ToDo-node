let {ToDoModel}=require('../models/toDoModel.js')

class ToDo {
	async getToDos(req,res){
      let results=await ToDoModel.find()
      console.log(results)
      res.render('todo',{todos:results});
	}
	async addNewToDo(req,res){
	  console.log(req.body)
	  let result=await	ToDoModel.create(req.body)
	  console.log(result)
	  res.json(result)
      

	}
	async deleteToDo(req,res){
		 console.log(req.body)
		  let result=await	ToDoModel.deleteOne(req.body)
		  console.log(result)
		  res.json(result)

	}
}

module.exports=new ToDo()