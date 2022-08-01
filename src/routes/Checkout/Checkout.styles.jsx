import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const CheckoutContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const Header = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    padding: 40px 100px;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
`;

export const EmptyMessage = styled.span`
    font-size: 25px;
    margin-bottom: 15px;
`;