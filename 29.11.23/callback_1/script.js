// const age = function(n) {
//     return `my age is ${n}!`;
// }
// console.log(age(24));



// Function 'print' that prints a variable to console.log
// This function prints the CONTENT of the value of a variable
function print(a_variable) {
    console.log(a_variable);
}

// Function that can 'invoke' a callback function
function print_callback(callback_f) {
    console.log(callback_f());
}

let num = 5; // Primitive
print(num); // 5

num = { age: 24, name: 'Tomer'}; // Object
print(num); // { age: 24, name: 'Tomer'}

num = function() { // Function
    return `What a wonderful day!`;
}

print(num); // Send a callback function to 'print' --> Call the function LATER, at an unknown line, DON'T USE!!
print(num()); // Invokes function 'num' right now and returns the result 'What a wonderful day!';
print_callback(num); // Send the 'num' function as reference to the function 'print_callback()', so it could be invoked LATER