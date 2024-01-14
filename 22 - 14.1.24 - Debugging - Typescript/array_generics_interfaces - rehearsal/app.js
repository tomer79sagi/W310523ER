"use strict";
class Car {
    constructor(id, name, year) {
        this.id = id;
        this.name = name;
        this.year = year;
    }
}
let products = [];
products.push(new Car(1, 'Subaru', 2020));
products.push(new Car(2, 'Mazda', 2019));
products.push(new Car(3, 'BNW', 2018));
// console.log(products);
function printProducts(products) {
    const divOutput = document.getElementById('output');
    for (let p of products) {
        let productDesc = `Product (${p.id}): ${p.name}<br/>`;
        console.log(productDesc);
        divOutput.innerHTML += productDesc;
    }
}
printProducts(products);
