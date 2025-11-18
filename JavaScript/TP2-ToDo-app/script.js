let tasksList = [];

window.onload = function() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasksList = JSON.parse(savedTasks);
        renderTasks();
    }
};

document.getElementById('button').addEventListener("click", addTask);
document.getElementById('clearAll').addEventListener("click", () => {
    if (tasksList.length != 0) {
        const confirmation = confirm("Are you sure you want to delete all tasks ?");
        if (confirmation) {
            tasksList = [];
            saveAndRender();
        }
    }
});

document.getElementById('search').addEventListener("input", () => {
    const searchTerm = document.getElementById('search').value;
    renderTasks(searchTerm);
});

function addTask() {
    const input = document.getElementById('input1');
    const value = input.value.trim();

    if (value) {
        tasksList.push({ text: value, state: false });
        input.value = "";
        saveAndRender();
    }
}

function deleteTask(index) {
    tasksList.splice(index, 1);
    saveAndRender();
}

function doneTask(index) {
    tasksList[index].state = !tasksList[index].state;
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
    renderTasks();
}

function renderTasks(filter = "") {
    const list = document.getElementById('list');
    list.innerHTML = "";

    let pending = 0;
    let done = 0;

    tasksList.forEach((task, index) => {
        if (!task.state) {
            pending++;
        }
        else { 
            done++;
        }

        if (task.text.toLowerCase().includes(filter.toLowerCase())) {
            list.innerHTML += `
                <li>
                    <span style="text-decoration:${task.state ? 'line-through' : 'none'}">${task.text}</span>
                    <div class="buttons">
                        <button class="delete" onclick="deleteTask(${index})">Delete</button>
                        <button class="done" onclick="doneTask(${index})">
                            ${task.state ? "Mark as undone" : "Mark as done"}
                        </button>
                    </div>
                </li>
            `;
        }
    });

    document.getElementById('pendingCount').textContent = `Pending: ${pending}`;
    document.getElementById('doneCount').textContent = `Done: ${done}`;
}
