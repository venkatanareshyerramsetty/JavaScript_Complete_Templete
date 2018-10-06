// Block Scoping with if condition
var course = 'engg';
if(course === 'engg'){
    var job = 'software';
}
console.log(course); // engg
console.log(job); // software

// Block Scoping with for loop
for(var i=0; i<=10; i++){
 // statements
}
console.log('i value : ' + i);

// Function scoping
function allocateDept() {
    if(course === 'engg'){
        var dept = 'IT';
    }
}
allocateDept();
// console.log(dept); cannot access

// IIFE
(function () {
    var greetMsg = 'Iam from IIFE';
    console.log(greetMsg);
})();

// Read & Write Operations in JS

