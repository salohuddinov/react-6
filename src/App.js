import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom"
import SingleProduct from './pages/single-product/SingleProduct';
import Loging from './pages/loging/Loging';
import Auth from './pages/auth/Auth';
import Admin from './pages/admin/Admin';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path='/loging' element={<Loging />} />
          <Route path='/' element={<Auth />}>
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
