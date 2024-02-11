"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User3__id;
class User3 {
    constructor(name) {
        _User3__id.set(this, void 0);
        this.name = name;
        this.createdAt = new Date();
        __classPrivateFieldSet(this, _User3__id, this.generateId(), "f");
    }
    generateId() {
        return Math.floor(Math.random() * 8999999 + 1000000);
    }
    get id() {
        return __classPrivateFieldGet(this, _User3__id, "f");
    }
}
_User3__id = new WeakMap();
User3.age = 45;
const user3 = new User3("David");
console.log(user3.name);
console.log(user3.id);
console.log(User3.age);
console.log(user3.createdAt);
