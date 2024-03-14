export default class Product {
    id;
    name;
    price;
    quantity;

    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateField(fieldName, value) {
        // The following static method checks if a 'fieldName' exists (declared), if so, set the value to it
        if (Object.hasOwnProperty.call(this, fieldName))
            this[fieldName] = value;
    }
}

export const PRODUCTS = [
    new Product(1, 'Product 1', 100, 0),
    new Product(2, 'Product 2', 200, 0),
    new Product(3, 'Product 3', 300, 0),
    new Product(4, 'Product 4', 400, 0),
    new Product(5, 'Product 5', 500, 0),
];