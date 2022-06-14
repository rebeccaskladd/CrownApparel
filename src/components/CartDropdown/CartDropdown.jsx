import './CartDropdown.scss';

import Button from '../Button/Button';

const CartDropdown = () => {
    return (
        <div className="dropdown-container">
            <div className="cart-items">

            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
};

export default CartDropdown;