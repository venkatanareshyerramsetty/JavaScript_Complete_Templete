// Create two variables and display their sum
var a = 10;
var b = 20;
var sum = a + b;
console.log('The Sum of ' + a  + ' , ' +  b  + ' is ' + sum);

// Find the biggest value between 2 numbers
var x = 10;
var y = 20;
if(x > y){
    console.log('The big value is : ' + x);
}
else{
    console.log('The big value is : ' + y);
}

// Find the biggest value among 3 numbers
var p = 10;
var q = 20;
var r = 30;
if(p > q && p > r){
    console.log('The biggest value is  : ' + p);
}
else if(q > r){
    console.log('The biggest value is  : ' + q);
}
else{
    console.log('The biggest value is  : ' + r);
}


// Good Morning Logic
var time = 10;
if(time <= 12){
    console.log('Good Morning');
}
else if(time >12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >17 && time <= 24){
    console.log('Good Evening');
}
else{
    console.log('Enter proper time');
}
