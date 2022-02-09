
function getFormValues() {

    let email = document.querySelector('#email-address').value;

    //for radio button no need to store 
    let m = document.querySelectorAll('.phone-type');
    for (let p of m) {
        // for each rating radio button, check if its .checked
        // is true
        if (p.checked == true) {
            model = p.value;
            break;
        }
    }

    //use array because it will store multiple values for checkboxes
    let services  = []; 
    let s = document.querySelectorAll('.services');
    for(let sc of s)
    {
        if(sc.checked == true)
        {
            services.push(sc.value);
        }
    }

    //    let pickup = document.querySelector('#pick-up>option:checked').value;

    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
