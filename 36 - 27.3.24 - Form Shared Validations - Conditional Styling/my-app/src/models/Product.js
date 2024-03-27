import Entity from "./Entity";

export default class Product 
        extends Entity {
    id;
    name;
    price;
    quantity;

    constructor(id, name, price, quantity) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

export const PRODUCTS = [
    new Product(1, 'Product 1', 100, 0),
    new Product(2, 'Product 2', 200, 0),
    new Product(3, 'Product 3', 300, 0),
    new Product(4, 'Product 4', 400, 0),
    new Product(5, 'Product 5', 500, 0),
];