import React from 'react';
import './ProductEdit.css';

import useAPI, { METHOD } from '../../hooks/useAPI';

const ProductView = ( {product} ) => {

    const [data, error, isLoading] = useAPI('https://fakestoreapi.com/products', METHOD.GET_ONE, { id: product.id });

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="id">ID</label>
                        </td>
                        <td>
                            { product.id }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name</label>
                        </td>
                        <td>
                            { product.name }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="price">Price</label>
                        </td>
                        <td>
                            { product.price }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="quantity">Quantity</label>
                        </td>
                        <td>
                            { product.quantity }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductView
