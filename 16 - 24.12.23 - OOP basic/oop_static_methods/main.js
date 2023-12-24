class Car {
    make; // e.g. Hyudai
    model; // e.g. Getz
    static totalCars;

    treatmentStatus;
    static TREATMET_STATUSES = {
        OPEN: 1,
        IN_PROGRESS: 2,
        CLOSED: 3
    };

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.treatmentStatus = Car.TREATMET_STATUSES.OPEN;
    }

    displayDetails() {
        console.log(`Car details`);
        console.log(this);
    }

    static displayTotalCars() {
        console.log(`Total cars: ${Car.totalCars}`);
    }
}

// 1. Create and manipulate OBJECTS of type Car
const car1 = new Car('Hyundai', 'Getz');
const car2 = new Car('Subaru', 'Legacy');

car1.displayDetails();
car2.displayDetails();

// 2. Update and use STATIC properties and methods in Class Car
Car.totalCars = 5;
Car.displayTotalCars();

function randomStaticStuff() {
    Math.random(); // STATIC (don't use 'new')
    JSON.parse(); // STATIC
    JSON.stringify(); // STATIC
}