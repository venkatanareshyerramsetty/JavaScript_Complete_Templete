// Get the Number Element
var numberElement = document.querySelector('#number');
var textMessage = document.querySelector('#text-number');
var numberArray = ['ZERO' , 'ONE' , 'TWO' ,'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];


// Add an Event Listener ofr Number Element
numberElement.addEventListener('keyup',function() {
    var tempStr = '';
    // Get the value of Number Element
    var enteredNumber = numberElement.value.toString();
    for(var i = 0; i<enteredNumber.length; i++){
        var index = parseInt(enteredNumber.charAt(i));
        tempStr += numberArray[index] + " ";
    }
    textMessage.textContent = tempStr;
});

