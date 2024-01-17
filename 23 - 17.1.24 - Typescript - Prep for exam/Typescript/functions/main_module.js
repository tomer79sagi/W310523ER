"use strict";
// 1. Basic funtion expresion in TypeScript
const fn = () => console.log('Hello');
fn();
// 2. Implicitly define a function + return type
const fn2 = (text, num) => {
    return `This is a beautiful day ${text} - ${num}`;
};
const str = fn2('Tomer', 99);
console.log(str);
// 3. Optional arguments
const fn3 = (text, num) => {
    // A. Standard IF (multi-line)
    // if (num) {
    //     return `Hi ${text}, your lucky number is ${num}`;
    // }
    // B. Short one-line IF (one-line)
    // if (num)
    //     return `Hi ${text}, your lucky number is ${num}`;
    // C. Shortest IF (one-line)
    if (num)
        return `Hi ${text}, your lucky number is ${num}`;
    // the Else
    return `You didn't provide a 'num' value!`;
};
const str2 = fn3('Tomer', 33); // The 'num' is provided option
console.log(str2);
const str3 = fn3('Tomer'); // The ELSE
console.log(str3);
// 4. Default argument values
const fn4 = (text, num = 23) => {
    if (num)
        return `Hi ${text}, your lucky number is ${num}`;
    // the Else
    return `You didn't provide a 'num' value!`;
};
const str4 = fn4('Tomer', 33); // The 'num' is provided option
console.log(str4);
const str5 = fn4('Tomer'); // The ELSE
console.log(str5);
