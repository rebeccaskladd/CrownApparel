import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
    text-transform: uppercase;
    margin-top: 20px;
`;

export const CategoryContainer = styled.div`
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const CategoryProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
`;