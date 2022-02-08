// PLACE YOUR CODE HERE
let emphasis = document.querySelectorAll('.emphasis');


for(let s of emphasis)
{
    s.style.fontFamily = "Verdana";
}

let finished = document.querySelectorAll('li.finished');

for(let s of finished){
    s.style.textDecoration = "line-through";
}



let todo = document.querySelectorAll('ul#low-priority li.todo');

for(let s of todo){
    s.style.backgroundColor = "blue";
}


let alert = document.querySelectorAll('.alert');

for(let s of alert)
{
    s.style.color = "red";
}