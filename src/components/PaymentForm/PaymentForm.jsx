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
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button buttonType="inverted">Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;