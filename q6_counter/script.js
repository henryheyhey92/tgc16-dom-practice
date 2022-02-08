let increment = document.querySelector('#increment');
let substract = document.querySelector('#substract');
let reset = document.querySelector('#reset');
let box = document.querySelector('div#box');
box.style.backgroundColor = "green";

let count = 0;

function Color(num){
  if(num === 0){
      return "green";
  }  
  if(num%2 === 0)
  {
      return "green";
  }
  else
  {
    return "red";
  }
}


increment.addEventListener('click', function(){
    box.innerHTML = ++count;
    let c = Color(count);
    box.style.backgroundColor = c.toString();
})

substract.addEventListener('click', function(){
    if(count !== 0)
    {
        box.innerText = --count;
    }
    let c = Color(count);
    box.style.backgroundColor = c.toString();
})

reset.addEventListener('click', function(){
    count = 0;
    box.innerText = count;
    let c = Color(count);
    box.style.backgroundColor = c.toString();
})

