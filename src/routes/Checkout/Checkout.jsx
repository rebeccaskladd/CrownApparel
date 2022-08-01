import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Link } from 'react-router-dom';

import { selectCartItems, selectTotalPrice } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Button from "../../components/Button/Button";

import {
    CheckoutContainer,
    HeaderContainer,
    Header,
    Total,
    EmptyMessage,
    ShoppingIcon,
    EmptyCart,
    InfoContainer,
    CardNumberInfo
} from './Checkout.styles';

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

                        <InfoContainer>
                            <h3>Stripe Test Card</h3>
                            <span>
                                As this application does not sell real products nor processes real payments, a test card is required to simulate transactions. Refer to Stripe's testing documentation for a full list of test cards.
                            </span>
                            <span> Use card number
                                <CardNumberInfo> 4242 4242 4242 4242</CardNumberInfo>
                                , a valid future date, any three-digit CVC, and any five-digit zip code.
                            </span>
                        </InfoContainer>

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