// Create an Object
var fridge = {};
fridge.eggs = 20;
fridge.chocolates = 40;
fridge.isIceCream = true;

// Access the Object
console.log(fridge);

// Object Literal
var mobile = {
    color : 'Black',
    company : 'Lenovo',
    RAM : '2GB',
    capacity : '32GB'
};

// access the object
console.log(mobile);

// access a property of an object
console.log('Mobile Company : ' + mobile.company); // Lenovo

// access non existing property of an object
console.log(mobile.price); // undefined

// DOT notation and [] notation
console.log('Capacity : ' + mobile.capacity); // 32GB
console.log('Capacity : ' + mobile['capacity']); // 32GB

// Nested Objects
var student = {
    name : 'Rajan',
    age : 22,
    course : 'Engg',
    address : {
       city : 'Hyderabad',
       state : 'Telangana',
       country : 'India'
    }
};

// access an Object
console.log(student);

// access nested objects
console.log(student.address.city);








