const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = [];
const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

// Register a new user
const register = (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
  
    // Check if the username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' });
    }
  
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
  
    // Generate JWT token
    const token = jwt.sign({ username: newUser.username }, 'secret_key', { expiresIn: '1h' });
  
    res.status(201).json({ message: 'User registered successfully', token });
  };

// Login a user
const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username: user.username }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Get all products
const getProducts = (req, res) => {
  res.json(products);
};

// Create a new product
const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update a product
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = products.find(p => p.id == id);

  if (product) {
    product.name = name;
    product.price = price;
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Delete a product
const deleteProduct = (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex(p => p.id == id);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = { register, login, getProducts, createProduct, updateProduct, deleteProduct };
