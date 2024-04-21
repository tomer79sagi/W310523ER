import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductListAPI = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // 1. Define async API function
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch(err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        // 2. Call the async function
        fetchProducts();
    }, []);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: { error }</div>

    return (
        <div>

            <table>

                <tbody>

                    { products.map(product => (
                        <tr key={product.id}>
                            <td>{ product.id }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <img src={ product.image } style={ {width: '100px'} }></img>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default ProductListAPI
