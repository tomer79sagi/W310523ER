class User2 {
    private _id: number;
    public name: string;
    static age: number = 45;
    readonly createdAt: Date;

    constructor(name: string) {
        this.name = name;
        this.createdAt = new Date();
        this._id = this.generateId();
    }

    generateId(): number {
        return Math.floor(Math.random() * 8999999 + 1000000)
    }

    get id() {
        return this._id;
    }
}

const user2 = new User2("David");

console.log(user2.name);
console.log(user2.id);
console.log(User2.age);
console.log(user2.createdAt);