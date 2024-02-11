"use strict";
// Contact = One Contact
class Contact {
    constructor(id, name, email, phone) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
}
// Typescript function expression
const findContact = (id, contacts) => {
    if (!contacts || contacts.length === 0)
        return null;
    const foundContact = contacts.find(value => value.id === id);
    if (!foundContact)
        return "No contact was found with this ID";
    // If no invalid conditions were found, return the found object because we found it.
    return foundContact;
};
const myContacts = []; // Implicit array of type 'Contact'
myContacts.push(new Contact(1, "Tomer", "a@b.com", "05244"));
myContacts.push(new Contact(2, "Inon", "a@b.com", "05244"));
myContacts.push(new Contact(3, "Evgeniya", "a@b.com", "05244"));
myContacts.push(new Contact(4, "Gal", "a@b.com", "05244"));
const a = findContact(1, []); // null
const e = findContact(1, null); // null
const b = findContact(2, myContacts); // Inon
const c = findContact(8, myContacts); // Not found
console.log(a);
console.log(e);
console.log(b);
console.log(c);
