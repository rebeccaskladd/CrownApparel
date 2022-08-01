import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './CartDropdown.styles.jsx';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    const close = () => {
        dispatch(setIsCartOpen(false));
    }

    return (
        <CartDropdownContainer onMouseLeave={close}>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;