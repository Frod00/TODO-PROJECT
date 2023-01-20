//
const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const groupS = document.querySelector('.grouping');


    todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Nowe itemki
    const newTodo = document.createElement('li');
    const deleteB = document.createElement('button-button')
    const groupSpan = document.createElement('span');
    const group = groupS.value;



    newTodo.innerText = todoInput.value;

    groupSpan.innerText = group;

    deleteB.innerText = "Delete";
    deleteB.classList.add("delete-button");
    deleteB.id = 'delete-buttonX';

    newTodo.appendChild(groupSpan);
    newTodo.appendChild(deleteB);
    todoList.appendChild(newTodo);



    todoInput.value = '';
});

    todoList.addEventListener('click',event =>{
        if(event.target.classList.contains("delete-button")){
            const li = event.target.parentNode;
            li.remove();
        }
});




// let groupDiv = document.querySelector(`[data-group='${group}']`);
// if(!groupDiv) {
//         groupDiv = document.createElement('div');
//         groupDiv.classList.add('group-div');
//        groupDiv.dataset.group = group;
//         todoList.appendChild(groupDiv);
// }

//  newTodo.dataset.group = group;

//newTodo.insertBefore(groupSpan, newTodo.lastChild);

//    groupDiv.appendChild(newTodo);
//    groupDiv.insertBefore(newTodo, groupDiv.lastChildChild);