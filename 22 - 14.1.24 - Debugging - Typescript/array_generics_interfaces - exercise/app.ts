interface IProduct {
    id: number;
    name: string;
}

class Car implements IProduct {
    id: number;
    name: string;
    year: number;

    constructor(id: number, name: string, year: number) {
        this.id = id;
        this.name = name;
        this.year = year;
    }
}


let products: Array<IProduct> = [];
products.push(new Car(1, 'Subaru', 2020));
products.push(new Car(2, 'Mazda', 2019));
products.push(new Car(3, 'BNW', 2018));

// console.log(products);

function printProducts(products: Array<IProduct>) {
    const divOutput: HTMLDivElement = document.getElementById('output') as HTMLDivElement;

    for (let p of products) {
        let productDesc = `Product (${p.id}): ${p.name}<br/>`;
        console.log(productDesc);
        divOutput.innerHTML += productDesc;
    }
}

printProducts(products);