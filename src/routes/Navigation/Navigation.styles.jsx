import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 10px;
    }
`;

export const LogoContainer = styled(Link)`
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
       width: 50px; 
       padding: 0;
    }
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;   
    }
`;

export const NavLink = styled(Link)`
    margin: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
`;