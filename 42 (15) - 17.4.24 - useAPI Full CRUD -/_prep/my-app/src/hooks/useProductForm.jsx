import { useState, useEffect } from 'react';
import Product from '../models/Product';
import useAPI, { METHOD } from './useAPI';

// HOOK
const useProductForm = (callbackSuccess, inProduct) => {

    const [isCreateMode] = useState(!inProduct ? true : false);
    const [product, setProduct] = useState(!inProduct ? new Product() : inProduct);
    const [errors, setErrors] = useState({}); // 'errors' is JS object, with the key = field name, and value = error message
    const [message, setMessage] = useState("");

    const [data, error, isLoading, callAPI] = useAPI('https://fakestoreapi.com/products', METHOD.CREATE, null, false);


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

            if (isCreateMode) { // CREATE MODE
                // Add a UID to the product object
                const currProduct = new Product(product.id, product.name, product.price, product.quantity);
                
                currProduct.title = currProduct.name;
                delete currProduct.name;
                delete currProduct.id;

                callAPI(currProduct);
            } else { // EDIT MODE
                callbackSuccess(product);
            }

        } else {
            // 3. Fail
            setMessage("Invalid form values.");
            setErrors(lclErrors);
            // console.log('Errors');
        }
    }

    useEffect(() => {
        console.log(data);
        // callbackSuccess(currProduct);
    }, [data]);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log('Errors: ', errors);
        }
    }, [errors]);

    useEffect(() => {
        if (inProduct)
            setProduct(inProduct);
    }, [inProduct]);

    return [product, handleChange, handleSubmit, errors, message];
}

export default useProductForm;