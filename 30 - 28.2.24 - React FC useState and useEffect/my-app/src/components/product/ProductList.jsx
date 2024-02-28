import React from 'react'
import { PRODUCTS } from '../../models/Product';

const ProductList = () => {

    const products = PRODUCTS;

    return (
        <div>
            <h3>Product List</h3>

            <table>

                <tbody>

                    { products.map(product => (
                        <tr key={product.id}>
                            <td>{ product.id }</td>
                            <td>{ product.name }</td>
                            <td>{ product.price }</td>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    )
}

export default ProductList;
