// PLACE YOUR CODE HERE

let box = document.querySelectorAll('.box');
let len = box.length;

for(let i of box){
    i.addEventListener('mouseenter', function(){

        i.style.backgroundColor = "yellow";
       
    })
}

for(let i of box){
    i.addEventListener('mouseleave', function(){
        i.style.backgroundColor = "white";
    })
}
