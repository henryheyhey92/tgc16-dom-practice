// PLACE YOUR CODE HERE


//1.
let h2 = document.querySelector('h2');

h2.style.fontFamily = "Verdana";
h2.style.fontSize = "32px";

//2.
let img = document.querySelector('img');
img.style.border = "1px solid black";
img.style.paddingTop = "32px";
img.style.paddingBottom = "15px";

//3.
let facts = document.querySelector('li:first-child');
let facts2 = document.querySelector('li:last-child');

facts.style.backgroundColor = "yellow";
facts2.style.backgroundColor = "yellow";

//4.
let pan = document.querySelector('h2#pancake');
pan.innerHTML = "Pancake Recipe";

let all = document.querySelectorAll('ol>li');

for(let a of all){
    a.style.backgroundColor = "orange";
}
