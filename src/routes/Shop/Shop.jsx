import { useContext } from 'react';

import { ProductsContext } from '../../contexts/Products';

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.imageUrl}></img>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Shop;