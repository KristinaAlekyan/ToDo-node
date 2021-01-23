let form =document.querySelector('#ToDo');
let inputToDo =document.querySelector('#addToDo');
let todoList =document.querySelector('#todolist');
let lis =document.querySelectorAll('#todolist li')
form.addEventListener('submit', (e)=>{
	e.preventDefault()
    let obj={item:inputToDo.value} 
    inputToDo.value=""
	fetch('/todo',{
		method:'POST',
		headers:{
			"Content-Type":'application/json',
			"Accept":'application/json',
		},
		body:JSON.stringify(obj)
	}).then((res)=>res.json())
	.then(data=>{
		let li=document.createElement('li')
		li.id=data._id
		li.innerHTML=data.item
		li.addEventListener('click',()=>{
       let obj={_id:li.id} 
       fetch('/todo',{
		method:'DELETE',
		headers:{
			"Content-Type":'application/json',
			"Accept":'application/json',
		},
		body:JSON.stringify(obj)
		}).then((res)=>res.json())
		.then(data=>{
			if(data.n==1){
				li.remove()
			}
		
		
       
	})


	})
		todoList.append(li)
       
	})



})

for(let li of lis){

	li.addEventListener('click',()=>{
       let obj={_id:li.id} 
       fetch('/todo',{
		method:'DELETE',
		headers:{
			"Content-Type":'application/json',
			"Accept":'application/json',
		},
		body:JSON.stringify(obj)
	}).then((res)=>res.json())
	.then(data=>{
		if(data.n==1){
			li.remove()
		}
		
		
       
	})


	})

}