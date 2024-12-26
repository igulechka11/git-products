
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProduct from './components/createProduct';

 import Header from './components/header';
import Product from './components/product';
import Products from './components/products';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Router>
		    <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/createProduct' element={<CreateProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
