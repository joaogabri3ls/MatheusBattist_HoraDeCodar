//Função que adiciona a tarefa 
function addTask() {

    //Título da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        //Clonar o template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);
        
        //Adiciona o título
        newTask.querySelector('.task-title').textContent = taskTitle;

        //Remove as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adiciona tarefa na lista
        const list = document.querySelector('#task-list')

        list.appendChild(newTask)

        //Evento de remover a tarefa
        const remover = newTask.querySelector('#remove').addEventListener("click", function () {
            removeTask(this);
        });


        //Evento de indicar tarefa completa
        
        const concluir = newTask.querySelector('#finished').addEventListener('click', function() {
            finishedTask(this);
        })

        //Limpar caixa de texto
        document.querySelector("#task-title").value = '';
    }
}

//Função que remove as tarefas
function removeTask(task) {
    task.parentNode.remove(true);
}

//Função que indica tarefa concluida
function finishedTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle('done');
}

//Evento de adicionar tarefas
const add = document.querySelector('#add')

add.addEventListener("click", function(e) {

    e.preventDefault();
    
    addTask();

});