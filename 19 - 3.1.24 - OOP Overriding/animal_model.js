// base class OR superclass
class Animal {
    // Method to override (to use polymorphism)
    speak() {
        console.log('The animal makes a sound');
    }
}

class Dog extends Animal {
    // OVERRIDES Superclass' method 'speak()'
    speak() {
        super.speak();
        console.log('Woof woof');
    }
}

class Cat extends Animal {
    // OVERRIDES Superclass' method 'speak()'
    speak() {
        super.speak();
        console.log('Meou meou');
    }
}

class AdoptedCat extends Cat {
    speak() {
        super.speak();
        console.log('Cheap meou meou');
    }
}

class BoughtCat extends Cat {
    speak() {
        super.speak();
        console.log('Expensive meou meou');
    }
}

export {
    Animal,
    Dog,
    Cat,
    AdoptedCat,
    BoughtCat
}