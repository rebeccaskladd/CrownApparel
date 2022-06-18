import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './CartDropdown.scss';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { CartContext } from '../../contexts/Cart';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className="dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                }
            </div>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </div>
    )
};

export default CartDropdown;