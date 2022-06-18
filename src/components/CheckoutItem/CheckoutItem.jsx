import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import './CheckoutItem.scss';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    const clearItemHandler = () => clearItemFromCart(item);

    return (
        <div className="item-container">
            <div className="img-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="item-field">{name}</span>

            <span className="item-field quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>

            <span className="item-field">${price}</span>
            <div className="remove-btn" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;