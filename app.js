document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
 
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const task = input.value.trim();
            
            if (task) {
                const li = document.createElement('li');
                li.className = 'task-item';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', () => {
                    taskInput.classList.toggle('completed');
                });
 
                const taskInput = document.createElement('input');
                taskInput.type = 'text';
                taskInput.className = 'task';
                taskInput.value = task;
 
                const spacer = document.createElement('div');
                spacer.className = 'spacer';
 
                const timeInput = document.createElement('input');
                timeInput.type = 'text';
                timeInput.className = 'time-input';
                timeInput.placeholder = '00:00';
                timeInput.maxLength = 5;
                
                timeInput.addEventListener('click', function(e) {
                    e.target.setSelectionRange(5, 5);
                });
                
                timeInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/[^\d:]/g, '');
                    
                    if (value.length > 2 && !value.includes(':')) {
                        value = value.substr(0, 2) + ':' + value.substr(2);
                    }
                    
                    const parts = value.split(':');
                    if (parts[0] && parseInt(parts[0]) > 23) parts[0] = '23';
                    if (parts[1] && parseInt(parts[1]) > 59) parts[1] = '59';
                    
                    e.target.value = parts.join(':');
                });
 
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = '×';
                deleteBtn.addEventListener('click', () => li.remove());
 
                spacer.append(timeInput, deleteBtn);
                li.append(checkbox, taskInput, spacer);
                taskList.appendChild(li);
                
                input.value = '';
            }
        }
    });
 });