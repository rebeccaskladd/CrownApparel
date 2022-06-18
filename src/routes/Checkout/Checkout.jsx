import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import './Checkout.scss';

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header">
                    <span>Product</span>
                </div>
                <div className="header">
                    <span>Description</span>
                </div>
                <div className="header">
                    <span>Quantity</span>
                </div>
                <div className="header">
                    <span>Price</span>
                </div>
                <div className="header">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }

            <span className="total">Total: ${totalPrice}</span>
        </div>
    )
};

export default Checkout;