"use strict";
class User2 {
    constructor(name) {
        this.name = name;
        this.createdAt = new Date();
        this._id = this.generateId();
    }
    generateId() {
        return Math.floor(Math.random() * 8999999 + 1000000);
    }
    get id() {
        return this._id;
    }
}
User2.age = 45;
const user2 = new User2("David");
console.log(user2.name);
console.log(user2.id);
console.log(User2.age);
console.log(user2.createdAt);
