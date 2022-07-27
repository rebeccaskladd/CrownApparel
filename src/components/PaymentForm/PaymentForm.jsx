import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from '../Button/Button';

import { PaymentFormContainer, FormContainer } from './PaymentForm.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Test Test'
                }
            }
        });

        if (paymentResult.error) {
            alert(paymentResult.error)
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
                <Button buttonType="inverted">Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;