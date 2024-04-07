import React, { useState, useEffect } from 'react'
import Product from '../../models/Product';
import './ProductNew.css';
import classNames from 'classnames';

const ProductNew = (props) => {

    // --- 1. BUILT-IN HOOK: STATE MANAGEMENT (useState) ---
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({}); // 'errors' is JS object, with the key = field name, and value = error message
    const [message, setMessage] = useState("");

    const cmpStyle = {
        color: Object.keys(errors).length > 0 ? "red" : "green"
    }

    const cmpClass = Object.keys(errors).length > 0 ? 'error' : 'success';
    const msgClass = classNames({
        'error': Object.keys(errors).length > 0,
        'success': Object.keys(errors).length === 0
    });


    // --- 2. BUILT-IN HOOK: FC LIFE CYCLE INTERVENTIONS (useEffect) ---


    // --- 3. CUSTOM HOOK: XXX ---
    const [product, handleChange, handleSubmit, errors, message] = useProductForm();
    

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
        const lclErrors = product.validate();

        // 1. Check if form is valid?
        if (Object.keys(lclErrors).length === 0) {
            // 2. Success
            setMessage("Successfully created a new product.");
            console.log(product);
            // Make the callback function received from props (part 2 of previous exercise)

            // Add a UID to the product object
            const currProduct = new Product(product.id, product.name, product.price, product.quantity);
            currProduct.generateUID();
            setProduct(currProduct);

        } else {
            // 3. Fail
            setMessage("Invalid form values.");
            setErrors(lclErrors);
            // console.log('Errors');
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log('Errors: ', errors);
        }
    }, [errors]);

    useEffect(() => {
        if (product.id) {
            props.callbackSuccess(product);
        }
    }, [product.id]);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
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
                        <tr style={cmpStyle} className={msgClass}>
                            <td colSpan={2} style={{textAlign: 'left'}}>
                                { message }
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
