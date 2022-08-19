import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        justify-content: center;
        text-align: center
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 800px) {
        padding-right: 0;
    }
`;

export const ItemField = styled.span`
    width: 23%;
`;

export const Quantity = styled(ItemField)`
    display: flex;
    
    @media screen and (max-width: 800px) {
        width: 23%;
        justify-content: center;
    }
`

export const Arrow = styled.div`
    cursor: pointer;
`;

export const Value = styled.div`
    margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        padding-left: 0;
        width: 23%;
    }
`;