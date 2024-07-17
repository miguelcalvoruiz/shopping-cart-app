import './App.css'
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { useState } from 'react';

const App = () => {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className='container'>
      <Header total={2.45} />
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  )
}

export default App
