import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { product_id } = useParams();

    return (
        <div>
            Product Details - { product_id }
        </div>
    )
}

export default ProductDetails
