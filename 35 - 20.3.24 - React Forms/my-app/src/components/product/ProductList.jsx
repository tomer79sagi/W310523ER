import React, { useState } from 'react'
import { PRODUCTS } from '../../models/Product';
import ProductNew from './ProductNew';
import './ProductList.css';

const ProductList = () => {

    const [products] = useState(PRODUCTS);
    const [newProductFlag, setNewProductFlag] = useState(false);

    const handleShowDetails = (product) => {
        alert(`${product.id} - ${product.name}`)
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

                    { newProductFlag && <ProductNew/> }   

                </div>

            </div>

        </div>
    )
}

export default ProductList;
