import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductEdit.css';

const ProductEdit = () => {
    const navigate = useNavigate();
    const { product_id } = useParams();
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState();

    const [product, setProduct] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Validate
        const fncFormErrors = {};
        if (product.title === '') fncFormErrors['title'] = 'Title cannot be blank!';
        if (product.price === '') fncFormErrors['price'] = 'Price cannot be blank!';
        setFormErrors(fncFormErrors);

        // 2. [Valid] (a) API + POST, (b) navigate to '/'
        const updateOneProduct = async () => {
            try {
                setisLoading(true);
                await axios.put(`https://fakestoreapi.com/products/${product_id}`, product);
                setisLoading(false);
                navigate(`/`);
            } catch(error) {
                console.log(error);
                setError(error);
                setisLoading(false);
            }
        }

        updateOneProduct();

        // 3. [Not Valid] Display error on page - DONE
    }

    // -- onMount --
    useEffect(() => {
        const fetchOneProduct = async () => {
            try {
                setisLoading(true);
                const response = await axios.get(`https://fakestoreapi.com/products/${product_id}`);        
                setProduct(response.data);
            } catch(error) {
                console.log(error);
                setError(error);
            } finally {
                setisLoading(false);
            }
        }

        fetchOneProduct();
    }, []);

    // -- Alternative flows / side effects --
    if (error) return <div>Error {error}</div>
    if (isLoading) return <div>Loading...</div>
    if (!product) return <div>Product not found.</div>

    // -- HTML --
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table className='productTable'>
                    <tr>
                        <td>ID</td>
                        <td>{product.id}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input
                                type="text"
                                name='title'
                                value={product.title}
                                onChange={handleChange}
                            />
                            { formErrors['title'] }
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{product.description}</td>
                    </tr>
                </table>
                <button>Update</button>
            </form>
        </div>
    )
}

export default ProductEdit
