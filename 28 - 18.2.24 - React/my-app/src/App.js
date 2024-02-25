import './App.css';
import Home from './components/Home';
import PageHeader from './components/PageHeader';

function App() {
  // .....

  return (
    <div className="App">
      <PageHeader title="My App Title"/>
      <Home text="This is the main area of the cool application!"/>
      App component works!
    </div>
  );
}

export default App;
