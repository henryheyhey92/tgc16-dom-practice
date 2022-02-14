// PLACE YOUR CODE HERE

let firstName = document.querySelector('#firstName');

let lastName = document.querySelector('#lastName');

let option = document.querySelectorAll('.option');

let forLocal = document.querySelector('#for-locals');

let forTourist = document.querySelector('#for-tourists');

document.body.addEventListener('change', function(){
    switch(option.value)
    {
        case 'local':
              forLocal.style.visibility = "visible";
              forTourist.style.display = "none";
              break;
        case 'tourist':
             forLocal.style.display = "none";
             forTourist.style.visibility = "visible";    
             break;

    }
})
