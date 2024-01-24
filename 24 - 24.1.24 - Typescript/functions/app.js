"use strict";
const fn = (text, num = 1) => {
    return text + num;
};
// console.log(fn('Tomer'));
// console.log(fn('Hello', 2));
// -- Return UNION TYPE --
const fn2 = (text, num = 2) => {
    if (num === 1) {
        return null;
    }
    return text + num;
};
console.log(fn2('Tomer')); // Tomer2 (default)
console.log(fn2('Hello', 2)); // Hello2
console.log(fn2('Goodbye', 1)); // null
// -- Return VOID --
const fn3 = (text, num = 2) => {
    console.log(text + num);
};
// -- Add implementation after declaration of function --
let fn4; // Declare (FUNCTION IS EMPTY)
fn4 = (text, num) => {
    return text + num;
};
console.log(fn4('Goodbye', 4)); // Goodbye4
// -- Callback function --
const fn5 = (cb) => {
    const myString = cb();
    return myString;
};
const funcA = () => {
    return 'Hello';
};
const str = fn5(funcA);
console.log(str); // Hello
// -- Objects with functions --
const obj = {
    name: 'Tomer',
    age: 30,
    fn: (text) => {
        return text;
    }
};
console.log(obj.name, obj.age, obj.fn('Hello'));
