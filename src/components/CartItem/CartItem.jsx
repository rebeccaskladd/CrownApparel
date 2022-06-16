import './CartItem.scss';

const CartItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;

    return (
        <div className="item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className='name'>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;