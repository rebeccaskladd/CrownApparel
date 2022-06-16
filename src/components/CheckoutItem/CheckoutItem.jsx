import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { removeItemFromCart } = useContext(CartContext);

    const removeProductFromCart = () => removeItemFromCart(item);

    return (
        <tr>
            <td>
                <img src={imageUrl} alt={name} />
            </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>
                <span onClick={removeProductFromCart}>X</span>
            </td>
        </tr>
    )
};

export default CheckoutItem;