import { useState, useEffect } from 'react';
import Product from '../models/Product';
import useAPI, { METHOD } from './useAPI';

// HOOK
const useProductForm = (callbackSuccess, inProduct) => {

    const [product, setProduct] = useState(!inProduct ? new Product() : inProduct);
    const [errors, setErrors] = useState({}); // 'errors' is JS object, with the key = field name, and value = error message
    const [message, setMessage] = useState("");

    const [data, error, isLoading, callAPI, method] = useAPI();


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

            const currProduct = new Product(product.id, product.name, product.price, product.quantity);
            currProduct.title = currProduct.name;
            delete currProduct.name;

            if (!inProduct) { // CREATE MODE
                delete currProduct.id;
                callAPI('https://fakestoreapi.com/products', METHOD.CREATE, currProduct);
            } else { // EDIT MODE
                callAPI('https://fakestoreapi.com/products', METHOD.UPDATE, currProduct);
            }

        } else {
            // 3. Fail
            setMessage("Invalid form values.");
            setErrors(lclErrors);
            // console.log('Errors');
        }
    }

    // Called when the API returned 'data'
    // Goal: Distinguish between GET_ONE and UPDATE
    useEffect(() => {
        if (data) {
            const newProduct = new Product(data.id, data.title, data.price, data.quantity);

            if (method === METHOD.GET_ONE) {
                setProduct(newProduct);
            } else if (method === METHOD.CREATE || method === METHOD.UPDATE) {
                callbackSuccess(newProduct);
            }
        }
    }, [data, method]);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log('Errors: ', errors);
        }
    }, [errors]);

    useEffect(() => {
        if (inProduct) {
            callAPI('https://fakestoreapi.com/products', METHOD.GET_ONE, inProduct);
        };
    }, [inProduct]);

    return [product, handleChange, handleSubmit, errors, message];
}

export default useProductForm;