class Car {
    // Method/function that initializes (מאתחל) a new object (מופע חדש)
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    printSummary() {
        console.log(`
            Make: ${this.make}\n
            Model: ${this.model}\n
            Year: ${this.year}\n
            Color: ${this.color}\n
        `);
    }
}

const tomersCar = new Car("Hyundai", "i20", 2016, "Gray");
const saharsCar = new Car("Seat", "Ibiza", 2012, "White");

alert(tomersCar.make); // --> Hyundai
alert(saharsCar.make); // --> Seat

tomersCar.printSummary();
saharsCar.printSummary();