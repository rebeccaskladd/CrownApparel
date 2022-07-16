import { createContext, useReducer } from "react";

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

const clearItem = (cartItems, product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id);
}

const removeItem = (cartItems, product) => {
    return cartItems.map((cartItem) => cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter(item => item.quantity > 0);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    itemCount: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    totalPrice: 0
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    itemCount: 0,
    totalPrice: 0
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    const [
        { isCartOpen, cartItems, itemCount, totalPrice }, dispatch
    ] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItems = (newCartItems) => {
        const newItemCount = newCartItems.reduce(
            (total, item) => total + item.quantity, 0);

        const newTotalPrice = newCartItems.reduce(
            (total, item) => total + (item.price * item.quantity), 0);

        dispatch({
            type: 'SET_CART_ITEMS',
            payload: {
                cartItems: newCartItems,
                itemCount: newItemCount,
                totalPrice: newTotalPrice
            }
        });
    };

    const addItemToCart = (product) => {
        const newCartItems = addItem(cartItems, product);
        updateCartItems(newCartItems);
    };

    const removeItemFromCart = (product) => {
        const newCartItems = removeItem(cartItems, product);
        updateCartItems(newCartItems);
    };

    const clearItemFromCart = (product) => {
        const newCartItems = clearItem(cartItems, product);
        updateCartItems(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch({ type: 'SET_IS_CART_OPEN', payload: bool });
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        itemCount,
        removeItemFromCart,
        clearItemFromCart,
        totalPrice
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};