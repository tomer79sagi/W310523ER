class User3 {
    #_id: number;
    public name: string;
    static age: number = 45;
    readonly createdAt: Date;

    constructor(name: string) {
        this.name = name;
        this.createdAt = new Date();
        this.#_id = this.generateId();
    }

    generateId(): number {
        return Math.floor(Math.random() * 8999999 + 1000000)
    }

    get id() {
        return this.#_id;
    }
}

const user3 = new User3("David");

console.log(user3.name);
console.log(user3.id);
console.log(User3.age);
console.log(user3.createdAt);