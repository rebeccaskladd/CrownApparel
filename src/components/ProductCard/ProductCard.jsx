import { useContext } from 'react';

import Button from '../Button/Button';

import { CartContext } from '../../contexts/Cart';

import {
    ProductCardContainer,
    Footer,
    ProductName,
    Price
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <ProductName>{name}</ProductName>
                <Price>${price}</Price>
            </Footer>
            <Button
                buttonType="inverted"
                onClick={addItemHandler}
            >Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;