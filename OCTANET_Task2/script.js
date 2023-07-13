function addTask() {
    var taskInput = document.getElementById("inp");
    var taskList = document.getElementById("List");
    if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
    }
    var li = document.createElement("li");
    li.innerHTML = taskInput.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function() {
    li.parentNode.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
    }