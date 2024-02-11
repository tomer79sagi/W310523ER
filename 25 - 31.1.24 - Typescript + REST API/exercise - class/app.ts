
class Position {
    private department: string;
    private name: string; // "Project Manager"
    private salary: number;

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}

// Contact = One Contact
class Contact {
    #id: number;
    private _name: string;
    private _email: string;
    private _phone: string;
    #position: Position | null = null;

    constructor(id: number,  name: string,  email: string,  phone: string, contactDetails: {email: string, phone: string}) {
        this.#id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;

        this._email = contactDetails.email;
        this._phone = contactDetails.phone;
    }
    
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }

    get position(): Position | null {
        return this.#position;
    }

    set position(position: Position) {
        this.#position = position;
    }
}


const c = new Contact(1, "Tomer", "a@b.com", "052444", {email: "b@c.com", phone: "0524434"});
c.position = new Position("Project Manager", "IT", 30000);

console.log(c);

