

// 1. Standard implementation of Array
const arr: (string | number)[] = [];
arr[0] = 'Tomer';
arr[1] = 34;
console.log(`Regular Array: ${arr}`);


// 2. Generics implementation of Array
const arrGenerics: Array<string | number> = [];
arrGenerics[0] = 'Tomer';
arrGenerics[1] = 34;
console.log(`Regular Array: ${arrGenerics}`);


// 3. Typle implementation of Array
const arrTuple: [string, number] = ['Tomer', 23];
arrTuple[0] = 'Tomer';
arrTuple[1] = 34;
console.log(`Regular Array: ${arrTuple}`);

const arrTuple2: [string, number, boolean, number] = ['Tomer', 23, true, 99];
arrTuple2[0] = 'Tomer';
arrTuple2[1] = 34;
arrTuple2[2] = false;
arrTuple2[3] = 88;
// arrTuple2[3] = true; // Error ==> array element at index is of incorrect type
// arrTyple2[4] = 'Sagi' // Error ==> index out of bounds
console.log(`Regular Array: ${arrTuple}`);


// Example: Function that returns an array of grades and the average of all grades
function getStudentGrades(): [number[], number] {
    // Create array of grades
    const arrGrades: Array<number> = [23, 45, 77, 22, 99, 55, 88];
    
    // Calculate average
    let sum: number = 0;
    for (let g of arrGrades) {
        sum += g; // --> sum = sum + g;
    }
    const avg = Math.round(sum / arrGrades.length);

    // Create the tuple
    const gradesTuple: [number[], number] = [arrGrades, avg];
    
    // Return the tuple
    return gradesTuple;
}

const studentGrades = getStudentGrades();
console.log(`Grades: ${studentGrades[0]}`); // Array of grades
console.log(`Average: ${studentGrades[1]}`); // Average
// console.log(`3rd index: ${studentGrades[2]}`); // Error --> No index 2 exists in returned tuple