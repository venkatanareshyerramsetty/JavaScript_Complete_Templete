// Assignment operator =
var num1 = 10;
console.log('num1 : ' + num1);

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log('Sum of a, b is : ' + sum);

var mul = a * b;
console.log('Mul of a , b is : ' + mul);

// Short hand math += , -= , *= , /=
var x = 10;
var y = 20;
var add = 0;
add = add + (x + y); // 0 + 10 + 20 = 30
add += (x + y);  // 30 + 10 + 20 = 60
console.log('add :' + add); // 60

// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age < 18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , -- (pre , post)
var i = 10;
i = i + 1;
i += 1;
i++;
console.log('i : ' + i); // 13

// Logical operators AND(&&) , OR(||)
var inRelation = true;
var parentAgreed = false;
if(inRelation && parentAgreed){
    console.log('Get Marry Soon!!');
}
else{
    console.log('Wait! until parents Agreed');
}

// String Concatenation Operator (+)
var str = 10 + "10" + 20 + 20 + "10";
console.log(str);

// Ternary operator (? :)
age = 25;
(age < 18) ? console.log('You Are Minor') : console.log('You Are Major');

// Type of operator
var someVar;
console.log('Value : ' + someVar + ' Data Type : ' + typeof someVar);

// == operator
a = 10;
b = "10";
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}