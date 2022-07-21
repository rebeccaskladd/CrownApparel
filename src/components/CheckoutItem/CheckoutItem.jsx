import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';

import {
    CheckoutItemContainer,
    ImageContainer,
    ItemField,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price, quantity } = item;

    const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <ItemField>{name}</ItemField>

            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>

            <ItemField>${price}</ItemField>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;