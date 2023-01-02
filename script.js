const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    const output = document.querySelector('.output');
    output.textContent = "Form successfully submitted";
    const submitBtn = document.querySelector('#submitBtn');
    submitBtn.setAttribute('disabled','');
});

const mailField = document.querySelector('#mail');
mailField.addEventListener('blur',()=> {
    if(mailField.validity.typeMismatch) {
        mailField.setCustomValidity("Please enter a valid email id");
    }
    else {
        mailField.setCustomValidity('');
    }
    mailField.reportValidity();
});

const countryField = document.querySelector('#country');
countryField.addEventListener('blur',()=> {
    if(countryField.validity.valueMissing) {
        countryField.setCustomValidity("Please enter your country's name");
    }
    else {
        countryField.setCustomValidity('');
    }
    countryField.reportValidity();
});

const zipField = document.querySelector("#zip");
zipField.addEventListener('blur',()=> {
    if(zipField.validity.patternMismatch) {
        zipField.setCustomValidity("Please enter a valid six digit zip code");
    }
    else {
        zipField.setCustomValidity('');
    }
    zipField.reportValidity();
});

//special case(password confirmation)
const pwdField = document.querySelector('#pwd');
const cpwdField = document.querySelector('#cpwd');

pwdField.addEventListener('blur',()=> {
    if(pwdField.validity.patternMismatch) {
        pwdField.setCustomValidity("Minimum eight characters,with at least one letter and one number");
    }
    else {
        cpwdField.removeAttribute('disabled');
        cpwdField.setAttribute('pattern',pwdField.value);
        pwdField.setCustomValidity('');
    }
    pwdField.reportValidity();
});

cpwdField.addEventListener('blur',()=> {
    if(cpwdField.validity.patternMismatch) {
        cpwdField.setCustomValidity("Password do not match");
    }
    else {
        cpwdField.setCustomValidity('');
    }
    cpwdField.reportValidity();
});