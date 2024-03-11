export default class Product {
    id;
    name;
    price;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export const PRODUCTS = [
    new Product(1, 'Product 1', 100),
    new Product(2, 'Product 2', 200),
    new Product(3, 'Product 3', 300),
    new Product(4, 'Product 4', 400),
    new Product(5, 'Product 5', 500),
];