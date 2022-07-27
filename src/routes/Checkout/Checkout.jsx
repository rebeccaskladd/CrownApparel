import { useSelector } from "react-redux";

import { selectCartItems, selectTotalPrice } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

import {
    CheckoutContainer,
    HeaderContainer,
    Header,
    Total
} from './Checkout.styles.jsx';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

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

            <PaymentForm />
        </CheckoutContainer>
    )
};

export default Checkout;