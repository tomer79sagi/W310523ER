import './App.css';
import { useState } from 'react';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import ProductNew from './components/products/ProductNew';
import ProductEdit from './components/products/ProductEdit';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">

      <BrowserRouter>

        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li><li>
                <Link to="/product/new">Create Product</Link>
              </li>
              {!token && (
                <>
                  <li>
                    <Link to="/auth/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/auth/register">Register</Link>
                  </li>
                </>
              )}
              
              {token && (
              <>
                <li>
                  <Link to="/product/new">Create Product</Link>
                </li>
                <li>
                  <Link to="/auth/logout">Logout</Link>
                </li>
              </>
            )}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={ <Products/> }/>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/register" element={<Register/>}/>
          <Route path="/product/:product_id" element={ <ProductDetails/> }/>
          <Route path="/product/:product_id/edit" element={ <ProductEdit/> }/>
          <Route path="/product/new" element={<ProductNew />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
