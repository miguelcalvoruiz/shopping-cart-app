import './App.css'
import Header from './components/Header/Header';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';

/**
 * Con esta funcion podemos obtener el total del precio de la lista completa de producto
 * para ello, introducimos por parametro la lista de los producto y la funcion se encarga
 * de sumar todos los precios.
 * @param {*} products 
 * @returns total (El total del precio de todos los productos de la lista)
 */
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

  const removeProduct = (productToRemove) => {
    setProducts(products.filter(product => product !== productToRemove))
  }

  let total = calculateTotal(products);

  return (
    <div className='container mx-auto p-4'>
      <Header total={total} />
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} removeProduct={removeProduct} />
    </div>
  )
}

export default App
