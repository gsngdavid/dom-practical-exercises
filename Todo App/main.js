const todoList = [];

// Get elements

const form = document.getElementById('form');
const list = document.getElementById('todo-list');


// Functions

function addItemHandler(e) {
    e.preventDefault();
    const item = form.todo.value.trim();
    if(item.length === 0 || todoList.includes(item)) return;
    todoList.push(item);
}

// Attach event handlers

form.addEventListener('submit', addItemHandler);