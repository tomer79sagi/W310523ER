"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.createdAt = new Date();
        this._id = this.generateId();
    }
    generateId() {
        return Math.floor(Math.random() * 8999999 + 1000000);
    }
}
const user = new User("David", 45);
console.log(user);
