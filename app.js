let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add btn disabled

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
});

// add new item to list

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-eraser"></i>
        </div>          
        `;
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task');
    }
});

//delete item from list

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-eraser')) {
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

