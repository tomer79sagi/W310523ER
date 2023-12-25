const s = `It's Tomer Sagi's birthday, aka "Mr. T".`;
// Not ", Not '

const s2 = 'Tomer Sagi is called "Mr. T"';
const s3 = "It's Tomer Sagi's birthday today.";
const s4 = `
    This is Tomer's
    birthday.

    What a great day.
    Where is my bloody cake?
`;

// const s5 = 'Tomer 
//     is a 
//     blah'; // Syntax error

const firstName = 'Tomer';
const lastName=  'Sagi';
const s6 = `This is ${firstName} ${lastName}'s birthday`;
const s7 = 'This is ' + firstName + ' ' + lastName + "'s birthday";

console.log(s);
console.log(s2);
console.log(s3);
console.log(s4);
// console.log(s5);
console.log(s6);
console.log(s7);