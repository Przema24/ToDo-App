import {update_task} from '../../modules/update_task.js'

const toggle = document.getElementsByClassName('complete')

for (let i = 0; i < toggle.length; i++)
{
    toggle[i].addEventListener('click', function() {

        update_task(this.parentNode.parentNode)

    })
}