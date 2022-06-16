import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/Cart';

import './CartIcon.scss';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <div className="cart-container">
            <ShoppingIcon className="icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
};

export default CartIcon;