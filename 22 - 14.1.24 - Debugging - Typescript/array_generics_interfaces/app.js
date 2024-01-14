"use strict";
// 'array'
let myArr1 = [];
myArr1[0] = 'Tomer';
myArr1.push('John');
console.log(`myArr1: ${myArr1}`);
let myArr2 = ['Tomer', 'John'];
// myArr2.push(5);
console.log(`myArr2: ${myArr2}`);
// let myArr3: object[] = [{}];
let myArr3 = [];
myArr3.push({
    name: "Tomer",
    id: 5
});
myArr3.push({
    name: 5555,
    id: 7,
    grades: [33, 55, 66]
});
// myArr3.push('4');
console.log(`myArr3: ${myArr3}`);
// 'array' with SPECIFIC class objects
class Student {
    constructor(name) {
        this.grades = [];
        this.name = name;
    }
}
let myArr4 = [];
myArr4.push(new Student('Tomer'));
// myArr4.push(5);
// 'Array' using 'Array' class
// Both following lines produce the EXACT SAME RESULT = NO DIFFERENCE
let myArr5 = [];
let myArr6 = [];
myArr5.push(new Student('Tomer'));
myArr6.push(new Student('John'));
