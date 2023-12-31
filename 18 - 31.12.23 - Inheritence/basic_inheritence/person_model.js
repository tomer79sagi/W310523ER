class Person {

    name;
    age;
    email;
    phone;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    presentSelf() {
        const str = `
            Let me introduce myself:
            Name: ${this.name}
            Email: ${this.email}
        `;

        alert(str);
    }
}

// Student inherits from Person (סטודנט יורש מאיש)
class Student extends Person {
    grades; // Array of grades

    constructor(name, email) {
        super(name, email);
        this.grades = []; // מאתחל כדי לבצע פעולות של מערכים על המשתנה
    }

    addGrade(intGrade) {
        this.grades.push(intGrade);
        // this.grades[this.grades.length - 1] = intGrade;
    }

    printGrades() {
        for (let grade of this.grades) {
            console.log(`${grade}\n`);
        }
    }
}

export default Person;
export { 
    Student
}