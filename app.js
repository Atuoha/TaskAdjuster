// --------------   FOR TASKLIST APPLICTION        ---------------------

// Creating document vars

const form =  document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const input = document.querySelector('#task');
const add_task = document.querySelector('#add_task');
const task_list = document.querySelector('.collection');
const clear_task = document.querySelector('.clear-tasks');




// Load all eventListners

loadallEvents();

// Add event listener

function loadallEvents(){
	document.addEventListener('DOMContentLoaded',getTask);
	form.addEventListener('submit',addTask);
	document.body.addEventListener('click',removeTask);
	clear_task.addEventListener('click',clearTasks);
	filter.addEventListener('keyup',filterTasks);
}







// function getTask()

function getTask(){
	
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}	

	tasks.forEach(function(task){
		
		const font = document.createElement('i')
		 font.className = 'fa fa-remove';
		const a = document.createElement('a');
		a.classList.add('delete-item', 'secondary-content');
		a.appendChild(font);
		
		const li =  document.createElement('li');
		li.textContent = task
		li.className = 'collection-item';
		li.appendChild(a);
		task_list.appendChild(li);	

	});

}



// addTask functionc

function addTask(e){
	e.preventDefault();

	if(input.value === ""){
		alert('Add task!');
	}else{
		// create li element
	
	clear_task.textContent = 'Clear tasks';
	clear_task.style.background = 'teal';
		
	const font = document.createElement('i');
	font.className = 'fa fa-remove';

	const a = document.createElement('a');
	a.classList.add('delete-item','secondary-content');
	a.appendChild(font);

	const li = document.createElement('li');
	li.className = 'collection-item';
	li.innerText = input.value;
	li.appendChild(a);

	task_list.appendChild(li);

	storeLocally(input.value);        //Storing it locally

	input.value = '';

	console.log(li);

	}	
}



// function storeLocally()

	function storeLocally(taskInput){
		let tasks;
		if(localStorage.getItem('tasks') === null){
			tasks = [];
		}else{
			tasks = JSON.parse(localStorage.getItem('tasks'));
			
		}
		tasks.push(taskInput);
		localStorage.setItem('tasks',JSON.stringify(tasks));

	}








	// Function removeTask()

	function removeTask(e){
		
		if(e.target.parentElement.classList.contains('delete-item')){
			if(confirm('Do you want to remove this task?')){
				e.target.parentElement.parentElement.remove()

				// Removing from localStorage

				removefromLocalStorage(e.target.parentElement.parentElement);

			}
		}		
	}



// Function removefromLocalStorage()

	function removefromLocalStorage(taskItem){
		let tasks;
		if(localStorage.getItem('tasks') === null){
			tasks = [];
		}else{
			tasks = JSON.parse(localStorage.getItem('tasks'))
		}

		tasks.forEach(function(task,index){
		  	if(taskItem.textContent === task){
		  		tasks.splice(index,1);
		  	}
		});
		  	localStorage.setItem('tasks',JSON.stringify(tasks));

	}



// Function clearTasks()
	function clearTasks(e){
		if(confirm('Do you want to clear all lists?')){
		// task_list.innerHTML = '';   // This is also working //	

			// OR

			while(task_list.firstChild){
				task_list.removeChild(task_list.firstChild);

				clearTaskfromLocalStorage();
			}
			e.target.textContent = 'Deleted';
			e.target.style.background = 'red';
			add_task.classList.add('pulse');
		}			
	}

// function clearTASK FROM LOCALstorage


	function clearTaskfromLocalStorage(){
		localStorage.clear();
	}


// FUNCTION fILTERtasks
	function filterTasks(e){
		const text = e.target.value.toLowerCase();

		document.querySelectorAll('.collection-item').forEach(function(task){
			const taskItem = task.firstChild.textContent;

			if(taskItem.toLowerCase().indexOf(text) != -1){
				task.style.display = 'block';
			}else{
				task.style.display = 'none';
				
			}
		});
		console.log(text);
	}




// --------------   FOR TASKLIST APPLICTION        ---------------------
