import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {
    PaymentFormContainer,
    FormContainer,
    PaymentButton,
} from './PaymentForm.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const totalPrice = useSelector(selectTotalPrice);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: totalPrice * 100 })
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        }
        else {
            alert('Payment successful');
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <PaymentButton
                    isLoading={isProcessingPayment}
                    buttonType="inverted"
                >Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer >
    )
};

export default PaymentForm;