import './ProductForm.css'

const ProductForm = () => {
    return (
        <form className='product-form'>

            <label htmlFor="name">Nombre</label>
            <input className='product-input' type="text" id="name" name="name" placeholder="Nombre" />

            <label htmlFor="price">Precio</label>
            <input className='product-input' type="number" name="price" id="price" placeholder="Precio" />

            <label htmlFor="image">Imagen</label>
            <input className='product-input' type="text" id="image" name="image" placeholder="Imagen" />

            <label htmlFor="description">Descripción</label>
            <textarea className='product-textarea' name="description" id="description" placeholder="Descripcion..."></textarea>


            <button className='add-button' type="submit">Añadir</button>
        </form>
    )
}

export default ProductForm;