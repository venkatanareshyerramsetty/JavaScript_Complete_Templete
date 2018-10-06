/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log('PI Value : ' + piValue);

// Math sqrt
var sqrt = Math.sqrt(144);
console.log('Sqrt of 144 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(10,78,4,987,654,89,7,654,45);
console.log('The Min value is : ' + min);

// find the Max of 4 numbers
var max = Math.max(10,78,4,987,654,89,7,654,45);
console.log('The Max value is : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100000
var random = Math.round(Math.random() * 100000);
console.log(random);
document.querySelector('#display').textContent = random.toString();

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var date = new Date();
console.log(date);

// Get proper date
var actualDate = date.toLocaleDateString();
console.log(actualDate);

// Display a Digital Clock on the web page
function digitalClock() {
    var time = new Date().toLocaleTimeString();
    document.querySelector('#clock').textContent = time;
}
setInterval(digitalClock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

var minValue = Number.MIN_VALUE;
console.log(minValue);

var maxValue = Number.MAX_VALUE;
console.log(maxValue);

var num1 = 100;
var strNumber = num1.toString();
console.log(strNumber + " " + typeof strNumber);

var num2 = parseInt(strNumber);
console.log(num2 + " " + typeof num2);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var greetMsg = "Good Morning";

// lowercase
console.log(greetMsg.toLowerCase());

// Uppercase
console.log(greetMsg.toUpperCase());

// Length of Str
console.log('Length : ' + greetMsg.length);

// get the specific char
console.log('Char : ' + greetMsg.charAt(1));

// get 'Good'
console.log('Substr : ' + greetMsg.substr(0,4));

// get 'Morning'
console.log('SubStr : ' + greetMsg.substr(5));
