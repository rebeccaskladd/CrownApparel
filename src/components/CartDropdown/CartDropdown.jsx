import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './CartDropdown.scss';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { CartContext } from '../../contexts/Cart';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                }
            </div>
            <Link to="/checkout">
                <Button>Go to Checkout</Button>
            </Link>
        </div>
    )
};

export default CartDropdown;