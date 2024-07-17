import ProductCard from '../ProductCard/ProductCard';

const PorductList = ({products, removeProduct}) => {
    return (
        <div>
            {products.map((product, index) => (
                <ProductCard key={index}  product={product} removeProduct={removeProduct}/>
            ))}
        </div>
    )
}

export default PorductList;