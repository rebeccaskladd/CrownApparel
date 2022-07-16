import { createContext, useEffect, useReducer } from 'react';

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from '../utilities/firebase/firebase';

// actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

const INITIAL_STATE = {
    currentUser: null
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch({ type: 'SET_CURRENT_USER', payload: user });
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

/*
    const userReducer = (state, action) => {
        return {
            currentUser: {...}

        }
    }
*/