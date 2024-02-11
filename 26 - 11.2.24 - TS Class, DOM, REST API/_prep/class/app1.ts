class User {
    _id: number;
    name: string;
    age: number;
    createdAt: Date;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.createdAt = new Date();
        this._id = this.generateId();
    }

    generateId(): number {
        return Math.floor(Math.random() * 8999999 + 1000000);
    }
}

const user = new User("David", 45);
console.log(user);