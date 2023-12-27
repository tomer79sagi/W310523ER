import Person from "./person.js";

function eventHandler() {
    const p1 = new Person('Tomer Sagi');

    p1.setName('John Smith');
    p1.setName(55555);

    // p1.#name = 'John Smith';
    // console.log(p1.#name);
    
    // p1.setName('John Smith');
    // console.log(`My name is: ${p1.getName()}`);

    p1.print();
    document.getElementById('output').innerHTML = p1.toHTMLString();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
