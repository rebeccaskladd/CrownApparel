import { useEffect } from "react";
import { createContext, useState } from "react";

const addItem = (cartItems, product) => {
    const item = cartItems.find(
        (cartItem) => cartItem.id === product.id
    );

    if (item) {
        return cartItems.map((cartItem) => cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...product, quantity: 1 }];
}

const removeItem = (cartItems, product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id);
}

const changeQuantity = (cartItems, product, action) => {
    return cartItems.map((cartItem) => cartItem.id === product.id
        ? (
            action === 'incr'
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : { ...cartItem, quantity: cartItem.quantity - 1 }
        ) : cartItem

    ).filter(item => item.quantity > 0);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    itemCount: 0,
    removeItemFromCart: () => { },
    changeItemQuantity: () => { },
    totalPrice: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, item) => total + item.quantity, 0);
        setItemCount(count);

        const totalCost = cartItems.reduce(
            (total, item) => total + (item.price * item.quantity), 0);
        setTotalPrice(totalCost);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addItem(cartItems, product));
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeItem(cartItems, product));
    }

    const changeItemQuantity = (product, action) => {
        setCartItems(changeQuantity(cartItems, product, action));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, itemCount, removeItemFromCart, changeItemQuantity, totalPrice };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};