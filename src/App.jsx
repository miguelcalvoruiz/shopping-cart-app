import './App.css'
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {

  return (
    <div className='container'>
      <Header total={2.45} />
      <ProductForm />
      <ProductList />
    </div>
  )
}

export default App
