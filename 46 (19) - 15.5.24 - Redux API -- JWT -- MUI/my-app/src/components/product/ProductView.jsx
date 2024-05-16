import React, { useEffect } from 'react';
import './ProductEdit.css';

import useAPI, { METHOD } from '../../hooks/useAPI';

const ProductView = ( {product} ) => {

    const [data, error, isLoading, callAPI] = useAPI();

    // Captures both (1) mounting event with new 'props' value and (2) update to the 'product' props
    useEffect(() => {
        callAPI('https://fakestoreapi.com/products', METHOD.GET_ONE, { id: product.id });
    }, [product]);

    if (isLoading || !data) return <div>Loading...</div>
    if (error) return <div>Error: { error }</div>

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="id">ID</label>
                        </td>
                        <td>
                            { data.id }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name</label>
                        </td>
                        <td>
                            { data.name }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="price">Price</label>
                        </td>
                        <td>
                            { data.price }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="quantity">Quantity</label>
                        </td>
                        <td>
                            { data.quantity }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductView
