import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart';

import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon.styles.jsx';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <CartIconContainer>
            <ShoppingIcon />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;