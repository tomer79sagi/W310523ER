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
var _Contact_id, _Contact_position;
class Position {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}
// Contact = One Contact
class Contact {
    constructor(id, name, email, phone, contactDetails) {
        _Contact_id.set(this, void 0);
        _Contact_position.set(this, null);
        __classPrivateFieldSet(this, _Contact_id, id, "f");
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._email = contactDetails.email;
        this._phone = contactDetails.phone;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get position() {
        return __classPrivateFieldGet(this, _Contact_position, "f");
    }
    set position(position) {
        __classPrivateFieldSet(this, _Contact_position, position, "f");
    }
}
_Contact_id = new WeakMap(), _Contact_position = new WeakMap();
const c = new Contact(1, "Tomer", "a@b.com", "052444", { email: "b@c.com", phone: "0524434" });
c.position = new Position("Project Manager", "IT", 30000);
console.log(c);
