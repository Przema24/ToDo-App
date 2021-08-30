import {update_task} from '../../modules/update_task.js'
import {delete_task} from '../../modules/delete-task.js'

document.getElementById('task').addEventListener('keyup', function(event) {

    if (event.key ==='Enter') {
        
        const task = document.getElementById('task').value 
        if (task) {

            addNewTask(task)
            document.getElementById('task').value = ''
        }
    }
})

function addNewTask (task) {

    let tasks

    if(localStorage.hasOwnProperty('to_do_tasks')) {
        tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
        tasks.push({
            name: task,
            status: 'to_do'
        })
    } else {
        tasks = [
            {
                name: task,
                status: 'to_do'
            }
        ]
    }
    
    localStorage.setItem('to_do_tasks', JSON.stringify(tasks))

    const task_list = document.getElementById("tasks-list")
    const newTask = document.createElement("li")
    newTask.innerText = task

    const buttons = document.createElement("div")
    buttons.classList.add("buttons")

    const remove = document.createElement("button")
    remove.classList.add("remove")
    remove.addEventListener('click', function() {
        delete_task(this.parentNode.parentNode)
    })

    const complete = document.createElement("button")
    complete.classList.add("complete")
    complete.addEventListener('click', function() {
        update_task(this.parentNode.parentNode)
    })

    buttons.appendChild(complete)
    buttons.appendChild(remove)
    
    newTask.appendChild(buttons)
    task_list.prepend(newTask)
}