import React, { useState } from 'react'
import { PRODUCTS } from '../../models/Product';
import ProductNew from './ProductNew';
import ProductEdit from './ProductEdit';
import './ProductList.css';

const ProductList = () => {

    const UI_STATE = {
        NONE: 'NONE',
        CREATE: 'CREATE',
        EDIT: 'EDIT'
    }

    const [products, setProducts] = useState(PRODUCTS);
    const [selectedProduct, setSelectedProduct] = useState();
    const [uiState, setUIState] = useState(UI_STATE.NONE);

    // This function is a 'callback' function that receives the newly created product
    // Which was created 'successfull' (i.e. valid product information) by the 'ProductNew' child component
    const productCreated = (product) => {
        const productsNew = [...products, product];

        setProducts(productsNew);
        setUIState(UI_STATE.NONE);
    }

    if (!products) return '<div>No results found</div>';

    return (
        <div>

            <div>
                <h2 className='center'>Product List</h2>
                <button onClick={() => setUIState(UI_STATE.CREATE)}>Add New Product</button>
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
                                    <button onClick={() => alert(`${product.id} - ${product.name}`)}>Show</button>
                                    <button onClick={() => { setSelectedProduct(product); setUIState(UI_STATE.EDIT) } }>Edit</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

                <div>

                    { uiState === UI_STATE.CREATE && <ProductNew callbackSuccess={productCreated}/> }   
                    { uiState === UI_STATE.EDIT && <ProductEdit product={selectedProduct}/> }   

                </div>

            </div>

        </div>
    )
}

export default ProductList;
