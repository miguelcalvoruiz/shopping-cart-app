import { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price: parseFloat(price), image, description });
    setName('');
    setPrice('');
    setImage('');
    setDescription('');
  };

  return (
    <form className='product-form flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm bg-white' onSubmit={handleSubmit}>
      <input 
        className='product-input mb-4 p-2 border border-gray-300 rounded-md' 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        className='product-input mb-4 p-2 border border-gray-300 rounded-md' 
        type="number" 
        placeholder="Precio" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <input 
        className='product-input mb-4 p-2 border border-gray-300 rounded-md' 
        type="text" 
        placeholder="Imagen" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />
      <textarea 
        className='product-textarea mb-4 p-2 border border-gray-300 rounded-md' 
        placeholder="Descripción..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button className='add-button p-2 bg-accent text-white rounded-md' type="submit">Añadir</button>
    </form>
  );
}

export default ProductForm;
