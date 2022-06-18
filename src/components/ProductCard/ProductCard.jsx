import { useContext } from 'react';

import './ProductCard.scss';

import Button from '../Button/Button';

import { CartContext } from '../../contexts/Cart';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(product);

    return (
        <div className="card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button
                buttonType="inverted"
                onClick={addItemHandler}
            >Add to Cart</Button>
        </div>
    )
}

export default ProductCard;