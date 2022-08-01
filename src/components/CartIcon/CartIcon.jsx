import { useSelector, useDispatch } from 'react-redux';

import { selectItemCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './CartIcon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();

    const itemCount = useSelector(selectItemCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const openCart = () => {
        dispatch(setIsCartOpen(true));
    }

    const toggleDropdown = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={toggleDropdown} onMouseEnter={openCart}>
            <ShoppingIcon />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;