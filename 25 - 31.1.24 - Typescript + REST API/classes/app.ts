class User {
    private name: string;
    static age = 20;
    public readonly createdAt: Date;

    constructor(name: string) {
        this.name = name;
        this.createdAt = new Date();
    }

    setDate(d: Date) {
        // this.createdAt = d; // Can't --> Readonly
    }
}

const myName: string = "Tomer";
// myName = "John"; // Can't --> const

const u = new User("Tomer");
// u.createdAt = new Date(); // Can't --> Readonly

console.log(`Age: ${User.age}`);