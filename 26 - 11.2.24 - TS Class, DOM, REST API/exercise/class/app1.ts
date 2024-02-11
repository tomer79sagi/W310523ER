
interface IName {
    first: string;
    last: string;
}

interface IAddress {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: string;
}

class User {
    #id: number;
    #name?: string;
    address: IAddress;
    phone: string;
    #email: string;
    #password?: string;
    #createdAt: Date;
    #isAdmin: boolean;
    #isBusiness: boolean;

    constructor(name: IName, address: IAddress, email: string, phone: string, password: string) {
        this.#id = User.generateId();
        this.name = name; // Uses the 'name' setter, re-using the capitalization functionality
        this.address = address;
        this.#email = email;
        this.phone = phone;
        this.password = password;
        this.#createdAt = new Date();
        this.#isAdmin = false;
        this.#isBusiness = false;
    }

    static generateId(): number {
        return Math.floor(Math.random() * 8999999 + 1000000);
    }

    static capitalizeWord(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    get id() {
        return this.#id;
    }

    get name(): string {
        return this.#name!;
    }

    set name(name: IName) {
        this.#name = `${User.capitalizeWord(name.first)} ${User.capitalizeWord(name.last)}`;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password!;
    }

    set password(password: string) {
        // This regex checks for at least one uppercase letter, one lowercase letter, exactly four digits, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4,})(?=.*[!@#$%^&*-]).*$/;
        if (passwordRegex.test(password))
            this.#password = password;
        else   
            throw new Error(`Password provided is invalid.`);
    }

    get createdAt() {
        return this.#createdAt;
    }

    get isAdmin() {
        return this.#isAdmin;
    }

    set isAdmin(isAdmin: boolean) {
        this.#isAdmin = isAdmin;
    }

    get isBusiness() {
        return this.#isBusiness;
    }

    toggleIsBusiness(): void {
        if (this.#isAdmin)
            this.#isBusiness = !this.#isBusiness;
        else
            throw new Error(`You are not an Admin, and not authorized to perform this action.`);
    }
}


try {

    const userTomer = new User(
        {
            first: "tomer",
            last: "sagi"
        },
        {
            state: "Israel",
            country: "Israel",
            city: "Haifa",
            street: "Kadish Luz",
            houseNumber: 9,
            zip: "3215907"
        },
        "me@tomersagi.com",
        "0528684411",
        "111111"
    );
    // userTomer.isAdmin = true;

    // userTomer.password = '12345'; // Should throw an Error
    userTomer.password = 'Tomer5555$';
    console.log(userTomer);
    userTomer.toggleIsBusiness();

} catch(error: any) {
    alert(`Error: ${error.message}`);
}


