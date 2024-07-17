import ProductCard from './ProductCard';

const PorductList = ({products}) => {
    return (
        <div>
            {products.map((product, index) => (
                <ProductCard key={index}  product={product}/>
            ))}
        </div>
    )
}

export default PorductList;