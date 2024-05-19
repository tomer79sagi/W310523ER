const express = require('express');
const { register, login, getProducts, createProduct, updateProduct, deleteProduct } = require('./controllers');
const { authenticateToken } = require('./middleware');

const router = express.Router();

// Authentication routes
router.post('/register', register);
router.post('/login', login);

// Product routes
router.get('/products', getProducts);
router.post('/products', authenticateToken, createProduct);
router.put('/products/:id', authenticateToken, updateProduct);
router.delete('/products/:id', authenticateToken, deleteProduct);

module.exports = router;
