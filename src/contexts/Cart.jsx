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


    return cartItems;
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    itemCount: 0,
    removeItemFromCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, item) => total + item.quantity, 0);
        setItemCount(count);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addItem(cartItems, product));
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeItem(cartItems, product));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, itemCount, removeItemFromCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};