import styled from "styled-components";

import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;  

    @media screen and (max-width: 800px) {
        min-width: 100%;
    }
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`;
