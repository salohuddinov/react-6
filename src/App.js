import './App.css';
import Prodact from './components/prodact/Prodact';
import Header from './components/header/Header';
import Hero from './components/hero/Hero'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <Prodact />
      </div>
    </div>
  );
}

export default App;
