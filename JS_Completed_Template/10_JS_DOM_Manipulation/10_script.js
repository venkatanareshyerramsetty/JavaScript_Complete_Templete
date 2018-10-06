//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('The width of the browser is : ' + width + 'px');

// Open a new Tab with Google page
//window.open('http://www.google.co.in');

// print method
//window.print();

// DOM Properties to get body , title , URL
var bodyElement = document.body;
console.log(bodyElement);

var title = document.title;
console.log(title);
document.title = 'Hacked by Me';

var url = document.URL;
console.log(url);

// Get the HTML Elements with DOM Manipulation
var h1Element = document.querySelector('#display');
h1Element.textContent = "Good Morning";
h1Element.style.color = 'red';
h1Element.style.fontSize = '40px';
h1Element.style.textShadow = '2px 3px white';

var h2Element = document.querySelector('h2');
h2Element.textContent = "DOM Manipulation Demo";
h2Element.style.backgroundColor = 'orangered';
h2Element.style.color = 'white';
h2Element.style.boxShadow = '0 0 15px black';

// JavaScript Event Handling
var inputElement = document.querySelector('#user');
var userInfoElement = document.querySelector('#user-info');
function getData() {
    var name = inputElement.value;
    if(name === 'naveen'){
        inputElement.style.backgroundColor = 'lightgreen';
        inputElement.style.borderColor = 'green';
        inputElement.style.boxShadow = '0 0 15px green';
        userInfoElement.textContent = "UserName is Valid";
        userInfoElement.style.color = 'forestgreen';
    }
    else{
        inputElement.style.backgroundColor = 'lightsalmon';
        inputElement.style.borderColor = 'red';
        inputElement.style.boxShadow = '0 0 15px red';
        userInfoElement.textContent = "UserName is Invalid";
        userInfoElement.style.color = 'red';
    }
}

// JavaScript EventListeners

// Get the HTML Element
var buttonElement = document.querySelector('#button');
buttonElement.addEventListener('click',function() {
    var name = inputElement.value;
    if(name === 'naveen'){
        inputElement.style.backgroundColor = 'lightgreen';
        inputElement.style.borderColor = 'green';
        inputElement.style.boxShadow = '0 0 15px green';
        userInfoElement.textContent = "UserName is Valid";
        userInfoElement.style.color = 'forestgreen';
    }
    else{
        inputElement.style.backgroundColor = 'lightsalmon';
        inputElement.style.borderColor = 'red';
        inputElement.style.boxShadow = '0 0 15px red';
        userInfoElement.textContent = "UserName is Invalid";
        userInfoElement.style.color = 'red';
    }
});

// JavaScript Event Listeners for Text Box

// Get the Element
var textBoxElement = document.querySelector('#user');
textBoxElement.addEventListener('keyup',function() {
    var name = textBoxElement.value;
    console.log(name);
    if(name === 'naveen'){
        inputElement.style.backgroundColor = 'lightgreen';
        inputElement.style.borderColor = 'green';
        inputElement.style.boxShadow = '0 0 15px green';
        userInfoElement.textContent = "UserName is Valid";
        userInfoElement.style.color = 'forestgreen';
    }
    else{
        inputElement.style.backgroundColor = 'lightsalmon';
        inputElement.style.borderColor = 'red';
        inputElement.style.boxShadow = '0 0 15px red';
        userInfoElement.textContent = "UserName is Invalid";
        userInfoElement.style.color = 'red';
    }
});
