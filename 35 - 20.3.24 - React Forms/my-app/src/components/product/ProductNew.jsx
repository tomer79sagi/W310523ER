import React, { useState, useEffect } from 'react'
import Product from '../../models/Product';

const ProductNew = () => {

    // --- 1. BUILT-IN HOOK: STATE MANAGEMENT (useState) ---
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({}); // 'errors' is JS object, with the key = field name, and value = error message


    // --- 2. BUILT-IN HOOK: FC LIFE CYCLE INTERVENTIONS (useEffect) ---


    // --- 3. CUSTOM HOOK: XXX ---
    

    // --- 4. EVENT HANDLERS ---
    const handleChange = (e) => {
        // 1. Create a new Class Instance and set all the current values (from the state)
        const currProduct = new Product(product.id, product.name, product.price, product.quantity);

        // 2. Update the single field that had changed
        currProduct.updateField(e.target.name, e.target.value);

        // 3. Use the state setter to update the field (REMEMBER, this is asynchronous)
        setProduct(currProduct);

        // console.log(currProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Check if form is valid?
        if (validateForm()) {
            // 2. Success
            console.log(product);
            // Make the callback function received from props (part 2 of previous exercise)
        } else {
            // 3. Fail
            // console.log('Errors');
        }
    }

    const validateForm = () => {
        let formIsValid = true;
        const formErrors = {};

        // Validate 'ID' field - check if there is a 'value' in the 'ID' input field
        if (!product.id) {
            formIsValid = false;
            formErrors['id'] = "'ID' field must not be empty."
        }

        // Validate 'Price' field - Check if exists, positive number, with highest value is 9999
        if (!product.price) {
            formIsValid = false;
            formErrors['price'] = "'Price' field must not be empty."
        } else { // ==> product.price exists
            if (product.price <= 0 || product.price >= 10000) {
                formIsValid = false;
                formErrors['price'] = "'Price' value must be between 1 and 99,999."
            }
        }

        setErrors(formErrors);
        return formIsValid;
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log('Errors: ', errors);
        }
    }, [errors]);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="id">ID</label>
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    id="id"
                                    name="id" 
                                    onChange={handleChange}
                                    />
                                { errors['id'] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Price</label>
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    id="price"
                                    name="price" 
                                    onChange={handleChange}
                                    />
                                { errors['price'] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="quantity">Quantity</label>
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    id="quantity"
                                    name="quantity" 
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{textAlign: 'right'}}>
                                <button>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductNew
