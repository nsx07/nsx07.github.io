const add = document.getElementById('add')
const div = document.getElementById('to-do')
var id = 0
add.addEventListener("click",addTask);

function addTask() {
    var task = document.getElementById('task').value;
    if(task == ''){
        alert('Preencha o campo')
    } else {
        id += 1
        div.innerHTML += ('<div class="tasks">\n                <input id="check'+id+'" type="checkbox">\n                <span>'+task+'</span><br>\n            </div>')
    }
}
