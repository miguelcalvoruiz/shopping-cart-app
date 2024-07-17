import { useState } from 'react';
import './ProductForm.css'

const ProductForm = ({addProduct}) => {
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
        <form className='product-form' onSubmit={handleSubmit}>

            <input 
                className='product-input' 
                type="text" 
                placeholder="Nombre" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />

            <input 
                className='product-input' 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                type="number"
                placeholder="Precio" 
            />

            <input 
                className='product-input' 
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Imagen" 
            />

            <textarea 
                className='product-textarea' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripcion...">
            </textarea>


            <button className='add-button' type="submit">Añadir</button>
        </form>
    )
}

export default ProductForm;