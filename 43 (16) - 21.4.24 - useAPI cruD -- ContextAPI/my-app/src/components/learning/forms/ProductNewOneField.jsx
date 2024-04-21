import React, { useState } from 'react'

const ProductNewOneField = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="product_name">Product Name</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    id="product_name" 
                                    // onChange={(event) => setName(event.target.value)}
                                    onChange={handleChange}
                                    />
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

export default ProductNewOneField
