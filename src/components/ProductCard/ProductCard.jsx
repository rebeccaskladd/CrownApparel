import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button from '../Button/Button';

import {
    ProductCardContainer,
    Footer,
    ProductName,
    Price
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, price, imageUrl } = product;

    const addItemHandler = () => dispatch(addItemToCart(cartItems, product));

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