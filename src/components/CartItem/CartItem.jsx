import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;