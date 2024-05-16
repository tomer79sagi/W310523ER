import './App.css';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      <BrowserRouter>

        <Routes>
          <Route path="/product/:product_id" element={ <ProductDetails/> }/>
          <Route path="/" element={ <Products/> }/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
