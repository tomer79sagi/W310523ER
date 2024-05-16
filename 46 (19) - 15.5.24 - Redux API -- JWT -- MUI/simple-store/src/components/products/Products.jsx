import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState(); // Initial state = undefined
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState();

    // -- onMount --
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setisLoading(true);
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');        
                setProducts(response.data);
            } catch(error) {
                console.log(error);
                setError(error);
            } finally {
                setisLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (error) return <div>Error {error}</div>
    if (isLoading) return <div>Loading...</div>
    if (!products) return <div>No products found.</div>

    return (
        <div className='product_list'>
            { products.map(product => (
                <div key={product.id} className='product_item'>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.images[0].replace('/"','').replace('[','').replace('"','').replace(']','')}></img>
                    </Link>
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                </div>
            ))}
        </div>
    )
}

export default Products
