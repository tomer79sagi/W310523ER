import React, { useState } from 'react'
import { PRODUCTS } from '../../models/Product';
import ProductNew from './ProductNew';
import './ProductList.css';

const ProductList = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [newProductFlag, setNewProductFlag] = useState(false);

    const handleShowDetails = (product) => {
        alert(`${product.id} - ${product.name}`)
    }

    // This function is a 'callback' function that receives the newly created product
    // Which was created 'successfull' (i.e. valid product information) by the 'ProductNew' child component
    const productCreated = (product) => {
        const productsNew = [...products, product];

        setProducts(productsNew);
        // setNewProductFlag(false);
    }

    if (!products) return '<div>No results found</div>';

    return (
        <div>

            <div>
                <h2 className='center'>Product List</h2>
                <button onClick={() => setNewProductFlag(true)}>Add New Product</button>
            </div>

            <div className='mainProductList'>

                <table>

                    <tbody>

                        { products.map(product => (
                            <tr key={product.id}>
                                <td>{ product.id }</td>
                                <td>{ product.name }</td>
                                <td>{ product.price }</td>
                                <td>
                                    {/* <button onClick={() => alert(`${product.id} - ${product.name}`)}>Show Details</button> */}
                                    <button onClick={() => handleShowDetails(product)}>Show Details</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

                <div>

                    { newProductFlag && <ProductNew callbackSuccess={productCreated}/> }   

                </div>

            </div>

        </div>
    )
}

export default ProductList;
