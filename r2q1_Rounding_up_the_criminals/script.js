// PLACE YOUR CODE HERE
// yarn add jest

//1.
//you are getting things into object, so need to loop through
let arrested = document.querySelectorAll('.a');

for(let s of arrested){
    s.style.backgroundColor = "red";
}

//2.
for(let y of arrested)
{
    y.innerText += " jailed"
}

let undercover = document.querySelectorAll('.a.undercover');

for(let x of undercover)
{
    x.style.backgroundColor = "yellow";
}


//3.
