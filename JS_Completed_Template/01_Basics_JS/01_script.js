//Alert Box
//alert("Welcome to JavaScript");

// confirm Box
//confirm("Hello JavaScript");

//console log
console.log('Good Morning JavaScript');

//Display date on the console
var date = new Date();
console.log(date);

// Display date on the web page using DOM
document.querySelector('#display').textContent = date.toDateString();

// Reverse a String
var str = "Good Morning";

function reverseStr(str) {
   var tempStr = '';
   for(var i=str.length-1; i>=0 ; i--){
       tempStr += str.charAt(i);
   }
   return tempStr;
}
var output = reverseStr(str);
document.querySelector('#display').textContent = output;

// Palindrome Function
function isPalindrome(str) {
    return str === reverseStr(str);
}

str = 'radar';
output = isPalindrome(str);
console.log('is Palindrome : ' + output);
document.querySelector('#display').textContent = output;

