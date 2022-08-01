import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Link } from 'react-router-dom';

import { selectCartItems, selectTotalPrice } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

import {
    CheckoutContainer,
    HeaderContainer,
    Header,
    Total,
    EmptyMessage,
    ShoppingIcon,
    EmptyCart
} from './Checkout.styles';
import Button from "../../components/Button/Button";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <CheckoutContainer>
            {
                cartItems.length !== 0 &&

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
            }

            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }


            {
                cartItems.length ?

                    <Fragment>
                        <Total>Total: ${totalPrice}</Total>
                        <PaymentForm />
                    </Fragment>
                    :
                    <EmptyCart>
                        <ShoppingIcon />
                        <EmptyMessage>Your cart is empty!</EmptyMessage>
                        <Link to="/shop">
                            <Button buttonType="inverted">Return to Shop</Button>
                        </Link>
                    </EmptyCart>

            }
        </CheckoutContainer>
    )

};

export default Checkout;