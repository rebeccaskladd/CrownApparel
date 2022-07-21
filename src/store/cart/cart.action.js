import { CART_ACTION_TYPES } from "./cart.types";

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

export const setIsCartOpen = (bool) => {
    return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool };
}

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addItem(cartItems, product);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeItem(cartItems, product);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearItem(cartItems, product);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};