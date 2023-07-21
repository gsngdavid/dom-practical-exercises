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
    displayTodoList();
}

function displayTodoList() {
    if(todoList.length === 0) {
        list.innerHTML = '<p>No items yet!';
        return;
    }
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < todoList.length; i++) {
        const li = document.createElement('li');
        const html = `
            <input type="checkbox" name="" id="${i}">
            <label for="${i}">${todoList[i]}</label>
            <svg class="icon" data-id="${i}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            `;
        li.innerHTML = html;
        fragment.appendChild(li);
    }
    list.innerHTML = '';
    list.appendChild(fragment);
}

function removeItemHandler(e) {
    const icon = e.target.closest('.icon');
    if(icon) {
        const id = icon.dataset.id;
        todoList.splice(id, 1);
        displayTodoList();
    }
}

// Attach event handlers

form.addEventListener('submit', addItemHandler);
list.addEventListener('click', removeItemHandler);