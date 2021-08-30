import { delete_task } from "../../modules/delete-task.js";

let delete_item = document.getElementsByClassName('remove')

for (let i = 0; i < delete_item.length; i++)
{

    delete_item[i].addEventListener('click', function() {

        delete_task(this.parentNode.parentNode)
    })
}