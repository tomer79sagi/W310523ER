import React from 'react';
import './ProductEdit.css';
import classNames from 'classnames';
import useProductForm from '../../hooks/useProductForm';

const ProductEdit = ( {selectedProduct, callbackSuccess} ) => {

    const [product, handleChange, handleSubmit, errors, message] = useProductForm(callbackSuccess, selectedProduct);

    const cmpStyle = {
        color: Object.keys(errors).length > 0 ? "red" : "green"
    }

    const cmpClass = Object.keys(errors).length > 0 ? 'error' : 'success';
    const msgClass = classNames({
        'error': Object.keys(errors).length > 0,
        'success': Object.keys(errors).length === 0
    });

    // ---- onUpdate ----

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="id">ID</label>
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    id="id"
                                    name="id" 
                                    value={product.id}
                                    onChange={handleChange}
                                    readOnly
                                    disabled
                                    />
                                { errors['id'] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    value={product.name}
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Price</label>
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    id="price"
                                    name="price" 
                                    value={product.price}
                                    onChange={handleChange}
                                    />
                                { errors['price'] }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="quantity">Quantity</label>
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    id="quantity"
                                    name="quantity" 
                                    value={product.quantity}
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr style={cmpStyle} className={msgClass}>
                            <td colSpan={2} style={{textAlign: 'left'}}>
                                { message }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{textAlign: 'right'}}>
                                <button>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductEdit
