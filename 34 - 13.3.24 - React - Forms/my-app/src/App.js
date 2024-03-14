import './App.css';
import Home from './components/Home';
import Learning from './components/learning/Learning';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormsMain from './components/learning/forms/FormsMain';
import Login from './components/auth/Login';

function App() {
  // .....

  return (
    <div className="App">

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
          <Route path="/" element={<Home text="This is the main area of the cool application!"/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
