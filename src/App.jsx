import './App.css'
import Header from './components/Header';
import ProductForm from './components/ProductForm';

const App = () => {

  return (
    <div className='container'>
      <Header total={2.45} />
      <ProductForm />
    </div>
  )
}

export default App
