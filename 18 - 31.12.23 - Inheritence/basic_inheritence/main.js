import Person from "./person_model.js";
import { Student } from "./person_model.js";

function eventHandler() {
    const person1 = new Person('Tomer Sagi', 'me@tomersagi.com');
    person1.presentSelf();

    const student1 = new Student('Gal Dvash' ,'gal.dvash@gmail.com');
    student1.presentSelf();
    student1.addGrade(88);
    student1.addGrade(99)
    student1.addGrade(93);
    student1.printGrades();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
