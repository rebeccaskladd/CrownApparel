import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item => (
                            <CheckoutItem key={item.id} item={item} />
                        ))
                    }
                </tbody>
            </table>

            <span>Total: ${totalPrice}</span>
        </div>
    )
};

export default Checkout;