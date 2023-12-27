class Person {
    #name;
    #age;
    
    constructor(name) {
        this.#name = name;
    }

    setName(name) {
        name = name.toString();
        if (name.length < 10) {
            alert(`No you can't, minimum 10 characters! ('${name}' ${name.length})`);
        } else {
            this.#reverseNameChars();
        }
    }

    // I want only THIS class/object to be able to use this method
    // 'Tomer Sagi' ==> 'igaS remoT';
    #reverseNameChars() {
        let reversedName = '';
        for (let i=this.#name.length - 1 ; i>=0 ; i--) {
            reversedName += this.#name.charAt(i);
        }

        this.#name = reversedName;
    }

    getName() {
        return this.#name;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    print() {
        console.log(this);
    }

    toHTMLString() {
        let objString = '';

        for (let attr in this) {
            objString += `${attr}: ${this[attr]}<br/>`;
        }

        return objString;
    }
}

export default Person;