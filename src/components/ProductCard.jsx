import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <div className="card">
            <img className="image" src={product.image} alt={product.name} />
            <div className="details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span>{product.price}€</span>
            </div>
            <button className="remove-button">❌</button>
        </div>
    )
}

export default ProductCard;