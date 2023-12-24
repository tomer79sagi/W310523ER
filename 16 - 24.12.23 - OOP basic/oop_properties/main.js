class Student {
    first_name;
    last_name;
    age = 23;

    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    // Exercise 2 - Solution
    sayWelcome() {
        alert(`Welcome ${this.first_name} ${this.last_name}`);
    }

    // Exercise 3 - Solution
    changeName(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    // Encapsulation
    printToConsole() {
        console.log(this);
    }

    printToHTML(divID) {
        let html = '';

        // 'element' => name of each property in the class
        // 'this' => the object I'm in, which is of type Student
        for (let element in this) {
            html += `${element}: ${this[element]}<br/>`;
        }

        document.getElementById(divID).innerHTML += html;
    }
}

// MUST use regular callback function and NOT arrow function, in order to use the 'this' functionality
document.getElementById('btnLoad').addEventListener('click', function() {
    // 'document.getElementById('btnLoad')' --> Button object
    this.innerHTML = 'Clicked Me';
    this.style.width = '150px';
    this.style.backgroundColor = 'green';

    setTimeout(() => {
        const student1 = new Student('Tomer', 'Sagi');
        student1.age = 45;
        student1.sayWelcome();
        student1.changeName('Michael', 'Jordan');
        student1.sayWelcome();
        // student1.printToConsole();
        // student1.printToHTML('output');
    
        const student2 = new Student('John', 'Smith');
        // student2.printToConsole();
        // student2.printToHTML('output');
    
        const student3 = new Student('Moshe', 'Zichmech');
        delete student3.age;
        // student3.printToConsole();
        // student3.printToHTML('output');
    }, 2000);
    
})