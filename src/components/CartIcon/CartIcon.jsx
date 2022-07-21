import { useSelector, useDispatch } from 'react-redux';

import { selectItemCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './CartIcon.styles.jsx';

const CartIcon = () => {
    const dispatch = useDispatch();

    const itemCount = useSelector(selectItemCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleDropdown = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;