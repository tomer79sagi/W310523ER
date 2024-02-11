"use strict";
class User {
    constructor(name) {
        this.name = name;
        this.createdAt = new Date();
    }
    setDate(d) {
        // this.createdAt = d; // Can't --> Readonly
    }
}
User.age = 20;
const myName = "Tomer";
// myName = "John"; // Can't --> const
const u = new User("Tomer");
// u.createdAt = new Date(); // Can't --> Readonly
console.log(`Age: ${User.age}`);
