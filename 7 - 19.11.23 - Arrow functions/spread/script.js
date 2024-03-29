// // -------------------------------------
// // 1. Basic spread example
// const arr1 = [4, 5, 6];
// const arr2 = [1, 2, 3, ...arr1]; // [1, 2, 3, 4, 5, 6]
// const arr3 = [1, 2, 3, arr1]; 

// // console.log(arr2); // [1, 2, 3, 4, 5, 6]
// // console.log(arr3); // [1, 2, 3, [4, 5, 6]]



// // -------------------------------------
// // 2. Rest parameter example
// const arr4 = [11, 22];
// function print(num1, num2, ...myArr) { // Rest Paramter = 
//   console.log(num1);
//   console.log(num2);
//   console.log(myArr);
// };

// // Invoke function with individual arguments (without determining the amount of arguments)
// print(10, 44);
// print(12, 44, 66, 77);
// print(10, 44, 55, 66, 77, 88);

// // Invoke function with array
// print(10, 66, arr4); // Creates a nested array inside the rest parameter (i.e. array inside an array)



// // -------------------------------------
// // 3. Another common example
// function display(...studentNames) {
//   console.log(studentNames);
// }

// const studentNames = ['John', 'Jane', 'Jack', 'Jill'];
// const studentNamesObj = {
//   name1: 'John',
//   name2: 'Jane',
//   name3: 'Jack',
//   name4: 'Jill'
// };

// display('John');
// display('John', 'Jane');
// display(studentNames);
// display(studentNamesObj);



// -------------------------------------
// 4. Spread operator with objects
const person = {
  name: 'John',
  age: 25,
  city: 'New York'
};

// Spread operator, creates a copy of the original, by creating a completely new instance
// with completely new properties and values
const person2 = { ...person }; // By Value --> person2 will be a copy of person
// const person2 = person; // By Reference --> person2 will be a reference to person

person.name = 'Jane';
person2.age = 30;
person2.city = 'Haifa';

console.log(person);
console.log(person2);