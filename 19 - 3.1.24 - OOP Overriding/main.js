import { Animal, Dog, Cat, AdoptedCat, BoughtCat } from "./animal_model.js";

function eventHandler() {
    const animal = new Animal();
    const apchi = new Dog();
    const toy = new Dog();
    const punch = new Dog();
    const tshirt = new Cat();
    const jemma = new AdoptedCat(); // 3rd level in hierarchy
    const mitzi = new BoughtCat(); // 3rd level in hierarchy

    const arrAnimal = [animal, apchi, toy, punch, tshirt, jemma, mitzi];
    jemma.speak();

    // FOR..LOOP element-based (NO INDEX), more efficient --> FASTER
    // for (let a of arrAnimal) {
    //     a.speak();
    // }

    // FOR..LOOP index-based
    // for (let i=0 ; i<arrAnimal.length ; i++) {
    //     arrAnimal[i].speak();
    // }
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
