// PLACE YOUR CODE HERE
let btn = document.querySelector('#btn');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let res = document.querySelector('#result');

btn.addEventListener('click', function(){
    let rndIntLeft = Math.floor(Math.random() * 6) + 1;
    let rndIntRight = Math.floor(Math.random() * 6) + 1;

    left.innerText = rndIntLeft;
    right.innerText = rndIntRight;
    let end = parseInt(rndIntLeft)+parseInt(rndIntRight);
    res.innerText = `result is : ${end}`;
})





