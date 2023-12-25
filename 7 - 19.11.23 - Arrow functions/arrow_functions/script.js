// -------------------------------------
// 1. Function decleration
function myName(name) {
    console.log(name);
    // console.log(`My name is ${name}`);
}
myName('John');



// -------------------------------------
// 2. Function expression
const myName2 = function(name) {
    console.log(name);
}
myName2('John2');



// -------------------------------------
// 3a. Arrow function
const myName3 = (name) => {
    console.log(name);
}
const myName4 = (first_name, last_name, id_number) => {
    console.log(first_name);
    console.log(last_name);
    console.log(id_number);
}
myName3('John3');
myName4('John4', 'Doe', 123456789);


// -------------------------------------
// 3b. Arrow function with one paratmer, doesn't need parenthesis
const myName5 = name => {
    console.log(name);
}
myName5('John5');


// -------------------------------------
// 3c. Arrow function one expression and return value
// Cannot do multi-line expressions
const myName6 = name => 'My name is ' + name;
const gg = myName6('John6');
console.log(gg);

// The above is the same as
const myName7 = name => {
    return 'My name is ' + name;
}
const hh = myName7('John7');
console.log(hh);