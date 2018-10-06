// creation of arrays
var array = [10,20,30,40,50,60];

// Accessing an array and its properties
console.log(array);
console.log(array[1]); // 20

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[6] = 70;
console.log(array);

// Accessing length of an Array
console.log(array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.reverse();
console.log('After : ' + array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.shift();
console.log('After : ' + array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.unshift(60);
console.log('After : ' + array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.pop();
console.log('After : ' + array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.push(60);
console.log('After : ' + array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):

// splice(pos)
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.splice(1);
console.log('After : ' + array);

// splice(pos,num)
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.splice(1,2); // removes 20,30
console.log('After : ' + array);

// splice(pos,1,elem)
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.splice(2,1,80); // replaces '30' with '80'
console.log('After : ' + array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1 = [10,20,30,40,50];
var array2 = array1.slice(); // create a new copy
if(array1 === array2){
    console.log('both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// indexOf()
array = [10,20,30,40,50];
var value = 500;
if(array.indexOf(value) === -1){
    console.log('The Element is not Exists');
}
else{
    console.log('The Element is Exists @ ' + array.indexOf(value));
}

// Join()
array = [10,20,30,40,50];
var strArray = array.join(" * ");
console.log(strArray);


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// forEach
var technologies = ['HTML','CSS','JavaScript','Bootstrap','Angular JS'];
var tempStr = '';
technologies.forEach(function (element) {
    tempStr += element.toUpperCase() + " ";
});
console.log(tempStr);

// for-in Loop
tempStr = '';
for(var index in technologies){
    var element = technologies[index];
    tempStr += element.toLowerCase() + " ";
}
console.log(tempStr);

// Grocery Items Example
var groceryItems = [];
var textBox = document.querySelector('#item');
var displayElement = document.querySelector('#display');

// Add Item
var addButton = document.querySelector('#add');
addButton.addEventListener('click',function() {
    var item = textBox.value;
    if(item !== ''){
        // if not exists
        if(groceryItems.indexOf(item) === -1){
            groceryItems.push(item);
        }
        // if exists
        else{
            alert('Dude!! the Item already Exists');
        }
    }
    else{
        alert('Dude!! enter at least one item');
    }

    textBox.value = '';
    displayElement.textContent = groceryItems.join(" , ");
});

// Delete Item
var deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click',function () {
    var item = textBox.value;
    groceryItems.splice(groceryItems.indexOf(item),1);
    textBox.value = '';
    displayElement.textContent = groceryItems.join(" , ");
});