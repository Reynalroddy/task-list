//declare our variables
let newTask = document.querySelector('#newTask');
let form = document.querySelector('#frm');
let list = document.querySelector('ul');
let filt = document.querySelector('#filtTask');
form.addEventListener('submit',addTask);


function addTask(e){


    e.preventDefault();
//create new list

let newList = document.createElement('li');
newList.className = "list-group-item d-flex justify-content-between align-items-center";
newList.appendChild(document.createTextNode(newTask.value));

//create new span element

let newSpan = document.createElement('span');
newSpan.className = 'del-btn';
newSpan.innerHTML = '<i class="fas fa-trash-alt"></i>';

//append newList with the span

newList.appendChild(newSpan);
list.appendChild(newList);


storeTask(newTask.value);
newTask.value = "";



}


//delete task

list.addEventListener('click',deleteTask);

function deleteTask(e){
if(e.target.parentElement.parentElement.classList.contains('list-group-item')){

list.removeChild(e.target.parentElement.parentElement);
//del from storage
deleteT(e.target.parentElement.parentElement);
}



}


//persist to local storage

function storeTask(task){
let tasks;
if(localStorage.getItem('tasks')===null){

tasks = [];

}
else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));

};

//display from local storage..
document.addEventListener('DOMContentLoaded',displayTask)
function displayTask(){
    if(localStorage.getItem('tasks')===null){

        tasks = [];
        
        }
        else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function(task){


            //for each new task create new elements
            
let newList = document.createElement('li');
newList.className = "list-group-item d-flex justify-content-between align-items-center";
newList.appendChild(document.createTextNode(task));

//create new span element

let newSpan = document.createElement('span');
newSpan.className = 'del-btn';
newSpan.innerHTML = '<i class="fas fa-trash-alt"></i>';

//append newList with the span

newList.appendChild(newSpan);
list.appendChild(newList);


        });
    }


    //delete task from localstorage

    function deleteT(listItem){


        if(localStorage.getItem('tasks')===null){
tasks = [];

        }
else{
tasks = JSON.parse(localStorage.getItem('tasks'));

}
tasks.forEach(function(task,index){
if(listItem.textContent ===task){
tasks.splice(index,1);

}
localStorage.setItem('tasks',JSON.stringify(tasks));

})

    }


    filt.addEventListener('keyup',filtTask);
    //filter task
function filtTask(){
   let inp = filt.value.toUpperCase();
    let list = document.querySelectorAll('li');
    list.forEach(function(item){
let res = item.textContent ;
console.log(res);
if(res.toUpperCase().indexOf(inp) != -1){
item.style.display = 'flex';
}
else{
item.classList.remove('d-flex') ;
item.style.display ="none";

}




    });
};