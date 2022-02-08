//1.
let h1 = document.querySelector('h1');
h1.style.backgroundColor = 'green';

//2.
let finished = document.querySelector('li.finished');
finished.innerText = "Repay credit card debt";


//3.
let urgent = document.querySelector('li#urgent');
urgent.style.borderColor = "black";
urgent.style.borderWidth = "2px";
//urgent.style.borderStyle = "solid";

//4. 
let emphasis = document.querySelector('.emphasis');
//emphasis.style.borderBottom = "2px solid";
emphasis.style.borderColor = "black";
emphasis.style.borderWidth = "2px";
emphasis.style.textDecoration = "underline"

//5.
let emphasis2 = document.querySelector('p.emphasis');
emphasis2.style.backgroundColor = "orange";
emphasis2.style.fontSize = "32px";
emphasis2.style.lineHeight = "24px";

//6.
let todo = document.querySelector('li#urgent span.todo');
todo.style.backgroundColor = "yellow";

//7.
let h2 = document.querySelector('h2');
h2.innerHTML = '<span class="greetings">About Us</span>'
