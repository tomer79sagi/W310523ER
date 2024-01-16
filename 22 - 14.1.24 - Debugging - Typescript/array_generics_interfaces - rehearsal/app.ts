interface IStockUI {
    type: number;
    quantity: number;
}

class Product implements IStockUI {
    id: number;
    name: string;
    type: number;
    quantity: number;
    price: number;
    description: string;

    constructor(id: number, name: string, type: number) {
        this.id = id;
        this.name = name;
        this.type = type;

        this.quantity = 0;
        this.price = 0;
        this.description = "";
    }
}

class Car extends Product {

    year: number;

    constructor(id: number, name: string, type: number, year: number) {
        super(id, name, type);
        this.year = year;
    }
}

function displayQuantities() {
    const uiArr: Array<IStockUI> = [];
    uiArr.push(new Car(1, 'Subaru', 1, 2019));
    uiArr.push(new Car(2, 'Mazda', 1, 2022));

    // CASTING of type IStockUI to Car
    const car = uiArr[0] as Car;
    console.log(`Car details: ${car.name} ${car.year}`);

    const divOutput = document.getElementById('output') as HTMLElement;
    for (let uiP of uiArr) {
        divOutput.innerHTML += `${uiP.type} - ${uiP.quantity}<br/>`;
    }
}
