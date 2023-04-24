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

// add new item to list when "Add" button is clicked or "Enter" key is pressed
function addItemToList() {
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
  }
  
  addBtn.addEventListener('click', addItemToList);
  
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addItemToList();
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

// edit task
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        let item = e.target.parentElement.parentElement;
        let task = item.querySelector('p');
        task.setAttribute('contenteditable', true);
        task.focus();

        task.addEventListener('blur', () => {
            task.setAttribute('contenteditable', false);
            item.classList.remove('editable');
        });

        task.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                task.setAttribute('contenteditable', false);
                item.classList.remove('editable');
            }
        });

        item.classList.add('editable');
    }
});
