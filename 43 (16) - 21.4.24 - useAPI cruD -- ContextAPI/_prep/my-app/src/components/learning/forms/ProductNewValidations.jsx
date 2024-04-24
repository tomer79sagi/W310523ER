import React, { useState } from 'react'
import Product from '../../../models/Product';

const ProductNewValidations = () => {

    // --- 1. BUILT-IN HOOK: STATE MANAGEMENT (useState) ---
    const [product, setProduct] = useState(new Product());


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

        console.log(currProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
    }
    
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

export default ProductNewValidations;
