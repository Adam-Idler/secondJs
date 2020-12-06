'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),

    locStor = [],

    render = function() {
        todoList.textContent = '';
        todoCompleted.textContent = '';
        headerInput.value = '';
        
        locStor.forEach(function (item) {
            const li = document.createElement('li');
            li.classList.add('todo-item');
            if (item.value) {
                localStorage.setItem('todoData', JSON.stringify(locStor));
                li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
                                '<div class="todo-buttons">' +
                                '<button class="todo-remove"></button>' +
                                '<button class="todo-complete"></button>' +
                                '</div>';
                
                if (item.completed) {
                    todoCompleted.append(li);
                } else todoList.append(li);
                
                const btnTodoCompleted = li.querySelector('.todo-complete');
                btnTodoCompleted.addEventListener('click', function() {
                    item.completed = !item.completed;
                    localStorage.setItem('todoData', JSON.stringify(locStor));
                    render();
                });
                const btnTodoRemove = li.querySelector('.todo-remove')
                btnTodoRemove.addEventListener('click', function() {
                    locStor.splice(locStor.indexOf(item), 1);
                    localStorage.setItem('todoData', JSON.stringify(locStor));
                    render();
                });
        }
    });
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        completed: false,
    };
    locStor.push(newTodo);
    render();
});

if (localStorage.getItem('todoData')) {
    locStor = JSON.parse(localStorage.getItem('todoData'));
    render();
}