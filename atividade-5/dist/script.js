// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Navegação suave para as seções
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

   document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.querySelector("#tarefas ul");

    // Adicionar nova tarefa
    const taskForm = document.querySelector("#tarefas form");
    taskForm.addEventListener("submit", event => {
        event.preventDefault();
        const taskInput = taskForm.querySelector("input[type='text']");
        if (taskInput.value.trim() !== "") {
            addTask(taskInput.value);
            taskInput.value = "";
        }
    });

    // Função para adicionar tarefa à lista
    function addTask(taskName) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            ${taskName} - <span>Pendente</span>
            <button class="edit-task">Editar</button>
            <button class="delete-task">Remover</button>
            <select class="status-task">
                <option value="Pendente" selected>Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluída">Concluída</option>
            </select>
        `;
        taskList.appendChild(newTask);
        attachTaskEvents(newTask);
    }

    // Função para anexar eventos às tarefas
    function attachTaskEvents(taskItem) {
        const editButton = taskItem.querySelector(".edit-task");
        const deleteButton = taskItem.querySelector(".delete-task");
        const statusSelect = taskItem.querySelector(".status-task");

        // Editar tarefa
        editButton.addEventListener("click", () => {
            const taskText = taskItem.firstChild.textContent.trim();
            const newTaskName = prompt("Edite o nome da tarefa:", taskText);
            if (newTaskName) {
                taskItem.firstChild.textContent = `${newTaskName} - `;
            }
        });

        // Remover tarefa
        deleteButton.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja remover esta tarefa?")) {
                taskItem.remove();
            }
        });

        // Alterar status
        statusSelect.addEventListener("change", () => {
            const statusSpan = taskItem.querySelector("span");
            statusSpan.textContent = statusSelect.value;
        });
    }

    // Anexar eventos às tarefas existentes
    document.querySelectorAll("#tarefas ul li").forEach(taskItem => {
        attachTaskEvents(taskItem);
    });
});

    // Adicionar novas metas
    const goalForm = document.querySelector("#metas form");
    const goalList = document.querySelector("#metas ul");
    if (goalForm && goalList) {
        goalForm.addEventListener("submit", event => {
            event.preventDefault();
            const goalInput = goalForm.querySelector("input[type='text']");
            const dateInput = goalForm.querySelector("input[type='date']");
            if (goalInput && dateInput && goalInput.value.trim() !== "" && dateInput.value) {
                const newGoal = document.createElement("li");
                newGoal.innerHTML = `Meta: <strong>${goalInput.value}</strong> - Prazo: ${dateInput.value}`;
                goalList.appendChild(newGoal);
                goalInput.value = "";
                dateInput.value = "";
            }
        });
    }

    // Configurações interativas
    const notificationsToggle = document.querySelector("#configuracoes input[type='checkbox']");
    if (notificationsToggle) {
        notificationsToggle.addEventListener("change", event => {
            if (event.target.checked) {
                alert("Notificações ativadas!");
            } else {
                alert("Notificações desativadas!");
            }
        });
    }

    const darkThemeToggle = document.querySelector("#configuracoes input[type='checkbox']:nth-child(2)");
    if (darkThemeToggle) {
        darkThemeToggle.addEventListener("change", event => {
            if (event.target.checked) {
                document.body.classList.add("dark-theme");
            } else {
                document.body.classList.remove("dark-theme");
            }
        });
    }

    // Simulação de progresso dinâmico
    const progressBars = document.querySelectorAll(".progress-bar div");
    progressBars.forEach(bar => {
        const target = bar.dataset.target || 0;
        bar.style.width = `${target}%`;
        bar.textContent = `${target}%`;
    });

 
  
  
  
});