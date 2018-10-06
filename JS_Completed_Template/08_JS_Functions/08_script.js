//creation of a simple function with no args and execute a function
function greet() {
    console.log('Good Morning');
}
greet(); // function call

//creation of a simple function with args
function greetArgs(name) {
    console.log("Good Morning " + name);
}
greetArgs("John");

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " yrs Old");
}
greetLessArgs("John");

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " yrs Old");
}
greetMoreArgs('John',40,'Manager');

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    var greeting =  " Good Morning " + name;
    return greeting;
}
var greetMsg = greetReturn('Williams');
console.log(greetMsg);

//function with empty return /no return
function greetWithNoReturn(name) {
    var greeting = " Good Morning " + name;
}
var wishMsg = greetWithNoReturn("John");
console.log(wishMsg);

// function Expressions with name and execution
var greetFn = function() {
   console.log('Iam from Function Expression');
};
greetFn();

// Functions as arguments without args
function greet1() {
    console.log('Iam from Greet 1 ');
}
function greet2() {
    console.log('Iam from Greet 2');
}
function greetCaller(fName) {
    fName();
}
greetCaller(greet1);

// Functions as arguments with args args
var greetFn1 = function(name) {
    console.log(" Hello " + name + " Iam from greetFn1");
};
var greetFn2 = function(name) {
    console.log(" Hello " + name + " Iam from greetFn2");
};
var greetFnCaller = function(fName,param) {
    fName(param);
};
greetFnCaller(greetFn1,'Williams');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee = {
    name : 'Rajan',
    age : 20,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromCity : function(city) {
        return city === this.address.city;
    },
    isFromState : function(state) {
        return state === this.address.state;
    },
    isFromCountry : function(country) {
        return country.toUpperCase() === this.address.country.toUpperCase();
    }
};

console.log('is from Hyd ? ' + employee.isFromCity('Hyderabad'));
console.log('is from TS ? ' + employee.isFromState('Telangana'));
console.log('is from India ? ' + employee.isFromCountry('india'));

// Default Function Arguments (arguments)
function greetDefault() {
    console.log(arguments);
}
greetDefault('John',40,"Manager");

// Create an Employee using Function
function createEmployee(name,age,salary,desg) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.salary = salary;
    obj.desg = desg;
    return obj;
}
var employee1 = createEmployee('John',40,50000,'Manager');
console.log(employee1);

var employee2 = createEmployee('Williams',30,80000,'Sales Manager');
console.log(employee2);














