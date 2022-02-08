
function getFormValues() {

    let email = document.querySelector('#email-address').value;

    let model = document.querySelectorAll('.phone-type');

    let services = document.querySelectorAll('.services');

    let pickup = document.querySelectorAll('#pick-up');

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
