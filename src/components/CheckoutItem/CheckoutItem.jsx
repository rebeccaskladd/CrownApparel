import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

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
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    const clearItemHandler = () => clearItemFromCart(item);

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