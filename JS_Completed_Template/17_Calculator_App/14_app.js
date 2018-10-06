// Calculator App

// Get the HTML elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorButton = document.querySelector('#operator');
var equalsButton = document.querySelector('#equals-button');
var resultButton = document.querySelector('#result-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var divButton = document.querySelector('#divide-button');
var mulButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');

// Click Event for Plus Button
plusButton.addEventListener('click',function() {
    var symbol = plusButton.textContent.trim();
    operatorButton.textContent = symbol;
});

// Click Event for Minus Button
minusButton.addEventListener('click',function() {
    var symbol = minusButton.textContent.trim();
    operatorButton.textContent = symbol;
});

// Click Event for Div Button
divButton.addEventListener('click',function() {
    var symbol = divButton.textContent.trim();
    operatorButton.textContent = symbol;
});

// Click Event for Mul Button
mulButton.addEventListener('click',function() {
    var symbol = mulButton.textContent.trim();
    operatorButton.textContent = symbol;
});

// click event for Equals Button
equalsButton.addEventListener('click',function() {
   var firstNumber = firstNumberElement.value;
   var secondNumber = secondNumberElement.value;
   var operator = operatorButton.textContent.trim();
   var result = 0;

   if(firstNumber !== '' && secondNumber !== ''){
       var num1 = parseFloat(firstNumber);
       var num2 = parseFloat(secondNumber);
       switch(operator){
           case '+':
               result = num1 + num2;
               break;
           case '-':
               result = num1 - num2;
               break;
           case '/':
               result = num1 / num2;
               break;
           case '*':
               result = num1 * num2;
               break;
           default:
               result = 0;
               break;
       }
        resultButton.textContent = result.toString();
   }
   else{
       resultButton.textContent = 'RESULT';
   }
});

// Click Event for Clear Button
clearButton.addEventListener('click',function() {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});