const btn=document.getElementById("btn");
const ul=document.getElementById("ul");
const todoinput=document.getElementById("todo-input");
const timeinput=document.getElementById("time-input");
function addTodo(){
    const li=document.createElement("li")
    const todoSpan=document.createElement("span")
    const timeSpan=document.createElement("span")
    const deleteSpan=document.createElement("span");
    li.className="list-item";
    todoSpan.innerText=todoinput.value;
    timeSpan.innerText=timeinput.value;
    deleteSpan.className="material-symbols-outlined"
    deleteSpan.id="delete"
    deleteSpan.innerText="delete"
    li.appendChild(todoSpan);
    li.appendChild(timeSpan);
    li.appendChild(deleteSpan);
    ul.appendChild(li);
}
btn.addEventListener("click",addTodo);



 
