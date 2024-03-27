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

    validate = () => {
        const formErrors = {};

        // Validate 'ID' field - check if there is a 'value' in the 'ID' input field
        if (!this.id) {
            formErrors['id'] = "'ID' field must not be empty."
        }

        // Validate 'Price' field - Check if exists, positive number, with highest value is 9999
        if (!this.price) {
            formErrors['price'] = "'Price' field must not be empty."
        } else { // ==> product.price exists
            if (this.price <= 0 || this.price >= 100000) {
                formErrors['price'] = "'Price' value must be between 1 and 99,999."
            }
        }

        return formErrors;
    }
}

export const PRODUCTS = [
    new Product(1, 'Product 1', 100, 0),
    new Product(2, 'Product 2', 200, 0),
    new Product(3, 'Product 3', 300, 0),
    new Product(4, 'Product 4', 400, 0),
    new Product(5, 'Product 5', 500, 0),
];