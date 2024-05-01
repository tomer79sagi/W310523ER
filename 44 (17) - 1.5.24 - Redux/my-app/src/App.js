import './App.css';
import Home from './components/Home';
import Learning from './components/learning/Learning';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormsMain from './components/learning/forms/FormsMain';
import Login from './components/auth/Login';

import { ThemeProvider } from './contexts/ThemeContext';
import APIContext from './contexts/APIContext';

function App() {
  // .....

  return (
    <div className="App">

      <ThemeProvider>
        <APIContext.Provider value='https://fakestoreapi.com/products'>

          <BrowserRouter>

            <nav className="horizontal-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/learning">Learning</Link></li>
                <li><Link to="/forms">Forms</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>

            <Routes>

              <Route path="/learning" element={<Learning/>}/>
              <Route path="/forms" element={<FormsMain/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/" element={<Home/>}/>

            </Routes>

          </BrowserRouter>

        </APIContext.Provider>
      </ThemeProvider>

    </div>
  );
}

export default App;
