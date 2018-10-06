// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You Will get the Job Soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Please practice the course');
}
else{
    console.log('Please join some course');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i=1; i<= 10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i ;
    }
}
console.log(output);
document.querySelector('#display').textContent = output;

// While loop Example to display from 1 - 10 values
output = '';
i = 1; // initialization
while(i <= 10){
    if(i <= 9){
        output += i + " - ";
    }
    else{
        output += i ;
    }
    i++; // increment
}
console.log(output);
document.querySelector('#display').textContent = output;

// Do while loop Example to display from 1 - 10 values
output = '';
i = 1; // initialization
do{
    if(i <= 9){
        output += i + " * ";
    }
    else{
        output += i ;
    }
    i++; // increment
}
while(i <= 10); // condition
console.log(output);
document.querySelector('#display').textContent = output;

// Switch Statement Example
var numberStr = '1231';
var tempStr = '';
for(var i = 0; i< numberStr.length; i++){
    var ch = parseInt(numberStr.charAt(i));
    switch(ch){
        case 0:
            tempStr += ' ZERO ';
            break;
        case 1:
            tempStr += ' ONE ';
            break;
        case 2:
            tempStr += ' TWO ';
            break;
        case 3:
            tempStr += ' THREE ';
            break;
        case 4:
            tempStr += ' FOUR ';
            break;
        case 5:
            tempStr += ' FIVE ';
            break;
        case 6:
            tempStr += ' SIX ';
            break;
        case 7:
            tempStr += ' SEVEN ';
            break;
        case 8:
            tempStr += ' EIGHT ';
            break;
        case 9:
            tempStr += ' NINE ';
            break;
        default:
            tempStr += ' ';
            break;
    }
}
console.log(tempStr);
document.querySelector('#display').textContent = tempStr;
