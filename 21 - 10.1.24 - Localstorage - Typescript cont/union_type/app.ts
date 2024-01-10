// Simple variable
let age: string | number; // 'Union Type'

age = '34'; // 'string' of 34
age = 34; // 'number' of 34


// Complex variable - ARRAY
// let ages: string[] | number[] = [];
let ages: (string | number)[] = [];

ages[0] = '66';
ages[1] = 55;
// ages[2] = true; // boolean is not allowed

// Revisit
// ages.push(99);
// ages.push('22');

// Complex variable - OBJECT
// Decleration
// --> The ENTIRE array MUST be string[] OR number[]
let agesObj: {
    counter: number,
    ages: string[] | number[]
}; 

// Assignment
agesObj = {
  counter: 4,
  ages: ['44', '33', '77']
}

agesObj = {
    counter: 4,
    ages: [44, 33, 77]
}


// --> EVERY ELEMENT can be either a 'string' or a 'number'
let agesObj2: {
    counter: number,
    ages: (string | number)[]
}; 

// Assignment
agesObj2 = {
  counter: 4,
  ages: ['44', '33', '77', 44, 11, 99]
}



// Complex variable - CLASS
