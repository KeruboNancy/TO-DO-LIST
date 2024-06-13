
        function addTask() {
            
            var taskInput = document.getElementById("task");
            var taskTime = document.getElementById("task-time")

            var taskValue = taskInput.value;
            var taskTimeValue = taskTime.value;

            
            var li = document.createElement("li");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            li.appendChild(checkbox);


            var taskTextNode = document.createTextNode(
              taskValue + " - " + taskTimeValue);
            li.appendChild(taskTextNode);

            
            var ul = document.getElementById("task-list");
            ul.appendChild(li);

            taskInput.value = "";
            taskTime.value = "";
        }