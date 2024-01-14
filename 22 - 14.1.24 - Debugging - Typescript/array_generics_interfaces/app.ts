class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


// 'array' with SPECIFIC class objects
class Student extends Person {
    grades: number[];

    constructor(name: string) {
        super(name);
        this.grades = [];
    }
}


class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


// 'interface' is NOT a data holder!!@!
// It's only an interface - ממשק חלול
interface INameable {
    name: string;
    age: number;
}



// 'Array' using 'Array' class
// Both following lines produce the EXACT SAME RESULT = NO DIFFERENCE
let myArr5: Student[] = [];
let myArr6: Array<Student> = [];

myArr5.push(new Student('Tomer'));
myArr6.push(new Student('John'));


let myArr7: Array<Student> = [];
let myArr8: Array<Person> = [];
let myArr9: Array<INameable> = [];

// myArr9.push(new Student('Tomer')); // Error
myArr9.push(new Dog('Apchi', 11));

