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

//  Food places

const foodPlace = [
    {
      Restaurant: "ITO",
      Cuisine: "Japanese/Italian Fusion",
      Location: "Surry Hills",
      Rating: "5 stars",
      Map: "https://maps.app.goo.gl/DsTyH3NGkEPNe8U47",
      Review: "Good set menu for its price.",
    },
    {
      Restaurant: "Acai Junky",
      Cuisine: "Brazilian",
      Location: "Bankstown",
      Rating: "5 stars",
      Map: "https://maps.app.goo.gl/HcEhJFxmPmxCnvim9",
      Review: "Love the acai and sauce.",
    },
  ];
  
  // Select the container
  const foodListContainer = document.getElementById("food-list");
  
  // Iterate through the foodPlace array
  foodPlace.forEach((place) => {
    // Create a container for each place
    const item = document.createElement("div");
    item.className = "food-item";
  
    // Populate the content
    item.innerHTML = `
      <li class="food__list"><strong>Restaurant Name:</strong> ${place.Restaurant}</li>
      <li class="food__list"><strong>Cuisine:</strong> ${place.Cuisine}</li>
      <li class="food__list"><strong>Location:</strong> ${place.Location}</li>
      <li class="food__list"><strong>Rating:</strong> ${place.Rating}</li>
      <li class="food__list"><strong>Map Location:</strong> <a href="${place.Map}" target="_blank">View</a></li>
      <li class="food__list"><strong>Review:</strong> ${place.Review}</li>
    `;
  
    // Append to the container
    foodListContainer.appendChild(item);
  });
  