import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import {
    CheckoutContainer,
    HeaderContainer,
    Header,
    Total
} from './Checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <HeaderContainer>
                <Header>
                    <span>Product</span>
                </Header>
                <Header>
                    <span>Description</span>
                </Header>
                <Header>
                    <span>Quantity</span>
                </Header>
                <Header>
                    <span>Price</span>
                </Header>
                <Header>
                    <span>Remove</span>
                </Header>
            </HeaderContainer>

            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }

            <Total>Total: ${totalPrice}</Total>
        </CheckoutContainer>
    )
};

export default Checkout;