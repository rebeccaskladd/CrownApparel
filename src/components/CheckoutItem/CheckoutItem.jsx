import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { removeItemFromCart, changeItemQuantity } = useContext(CartContext);

    const removeProductFromCart = () => removeItemFromCart(item);
    const changeProductQuantity = (action) => changeItemQuantity(item, action);

    return (
        <tr>
            <td>
                <img src={imageUrl} alt={name} />
            </td>
            <td>{name}</td>
            <td>
                <span onClick={() => changeProductQuantity('decr')}>&lt;</span>
                <span>{quantity}</span>
                <span onClick={() => changeProductQuantity('incr')}>&gt;</span>
            </td>
            <td>${price}</td>
            <td>
                <span onClick={removeProductFromCart}>X</span>
            </td>
        </tr>
    )
};

export default CheckoutItem;