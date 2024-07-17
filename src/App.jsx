import './App.css'
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { useState } from 'react';

const calculateTotal = (products) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  return total;
};

const App = () => {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  let total = calculateTotal(products);

  return (
    <div className='container'>
      <Header total={total} />
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  )
}

export default App
