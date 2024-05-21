import React, { useState } from 'react';
import axios from 'axios';

const ProductNew = ({ token }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:3000/api/products', {
        name,
        price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Product created successfully');
      setName('');
      setPrice('');
    } catch (error) {
      console.error('Error creating product', error);
      alert('Error creating product\n' + error);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductNew;
