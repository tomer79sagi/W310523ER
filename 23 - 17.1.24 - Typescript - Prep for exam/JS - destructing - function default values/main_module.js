// 1. Function default values
function doX(num = 23) {
    console.log(num);
}
console.log('doX()');
doX(77);
doX();


// 2. Destructing - objects
const person = {
    firstName: 'Tomer',
    age: 45
}

console.log('person.');
console.log(`${person.firstName} - ${person.age}`);
// console.log(`${firstName} - ${age}`);

console.log('destructed person object');
// const { xxx, age } = person; // 'xxx' is 'undefined' because it doesn't exist in 'person' object
const { firstName, age } = person; // 'firstName' and 'age' are desctructed from 'person' object
console.log(`${firstName} - ${age}`);


// 3. Destructing - arrays
const arrGrades = [99, 88, 44];

const [ grade1, grade2 ] = arrGrades;
console.log(`${grade1} - ${grade2}`);

const [ , , grade3 ] = arrGrades;
console.log(`${grade3}`);
