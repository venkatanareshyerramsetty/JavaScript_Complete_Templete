var h2Element = document.querySelector('#msg');

// get the GoodMorning Button
var goodMorningButton = document.querySelector('#morning');
goodMorningButton.addEventListener('click',function() {
    displayMessage('Good Morning','forestgreen');
});

// Get GoodAfternoonButton
var goodAfternoonButton = document.querySelector('#afternoon');
goodAfternoonButton.addEventListener('click',function() {
    displayMessage('Good Afternoon','teal');
});

// Get GoodEveningButton
var GoodEveningButton = document.querySelector('#evening');
GoodEveningButton.addEventListener('click',function() {
    displayMessage('Good Evening','orangered');
});

// Get GoodNightButton
var GoodNightButton = document.querySelector('#night');
GoodNightButton.addEventListener('click',function() {
    displayMessage('Good Night','black');
});

function displayMessage(message,color) {
    h2Element.textContent = message;
    h2Element.style.backgroundColor = color;
    h2Element.style.color = 'white';
    h2Element.style.textAlign = 'center';
    h2Element.style.padding = '10px';
    h2Element.style.boxShadow = '0 0 15px black';
    h2Element.style.fontSize  = '35px';
}