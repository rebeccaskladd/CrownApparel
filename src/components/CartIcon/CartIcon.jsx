import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
    return (
        <div className="cart-container">
            <ShoppingIcon className="icon" />
            <span className="item-count">10</span>
        </div>
    )
};

export default CartIcon;