import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import PageHeader from './components/PageHeader';
import Learning from './components/learning/Learning';

function App() {
  // .....

  return (
    <div className="App">
      <PageHeader title="My App Title"/>
      <Home text="This is the main area of the cool application!"/>
      App component works!
      <Learning/>
      <Footer/>
    </div>
  );
}

export default App;
