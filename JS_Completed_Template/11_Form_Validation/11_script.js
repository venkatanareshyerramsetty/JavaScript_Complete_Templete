// Get the HTML Elements
var usernameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');

// Get the Error Messages
var userErrorElement = document.querySelector('#name_error');
var emailErrorElement = document.querySelector('#email_error');
var passwordErrorElement = document.querySelector('#password_error');

// Blur event for username Field
usernameElement.addEventListener('blur',function() {
    clearErrorMessage(usernameElement,userErrorElement);
});

// Blur event for email Field
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});

// Blur event for password Field
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});

// Blur event for confirm Password Field
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    clearErrorMessage(passwordElement,passwordErrorElement);
});

// validate function logic
function validate() {
    var isValid = true;

    // Required Username validation
    if(usernameElement.value === ''){
        displayErrorMessage(usernameElement,userErrorElement,'Username is Required');
        isValid = false;
        return isValid;
    }

    // Username Length validation
    if(usernameElement.value.length < 5){
        displayErrorMessage(usernameElement,userErrorElement,'Enter at least 5 letters');
        isValid = false;
        return isValid;
    }

    // RegExp Username validation
    if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        displayErrorMessage(usernameElement,userErrorElement,'RegExp Not Matched');
        isValid = false;
        return isValid;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        displayErrorMessage(emailElement,emailErrorElement,'Email is Required');
        isValid = false;
        return isValid;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        displayErrorMessage(passwordElement,passwordErrorElement,'Password is Required');
        isValid = false;
        return isValid;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,'Confirm Password is Required');
        isValid = false;
        return isValid;
    }

    // Password match validation
    if(passwordElement.value !== confirmPasswordElement.value){
        displayErrorMessage(passwordElement,passwordErrorElement," Passwords didn't Match ");
        displayErrorMessage(confirmPasswordElement,passwordErrorElement," Passwords didn't Match ");
        isValid = false;
        return isValid;
    }


    if(isValid === false){
        return isValid;
    }
    else{
        alert('Form Submitted Successfully');
        return true;
    }
}

// display Error message
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.borderColor = 'red';
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// function clear Error Message
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.borderColor = 'gray';
    inputElement.style.backgroundColor = 'white';
    inputElement.style.boxShadow = '0 0 0 black';
    errorElement.textContent = '';
}