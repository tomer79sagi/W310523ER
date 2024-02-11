
// Contact = One Contact
class Contact {
    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: string;

    constructor(id: number,  name: string,  email: string,  phone: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }
}

// Typescript function expression
const findContact = (id: number, contacts: Contact[] | null): null | string | Contact => { // Type Function implicitly
    if (!contacts || contacts.length === 0) return null;

    const foundContact = contacts.find(value => value.id === id);
    if (!foundContact) return "No contact was found with this ID";

    // If no invalid conditions were found, return the found object because we found it.
    return foundContact;
}

const myContacts: Contact[] = []; // Implicit array of type 'Contact'
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
