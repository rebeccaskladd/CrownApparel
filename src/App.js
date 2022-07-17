import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from '../src/utilities/firebase/firebase';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

import { setCurrentUser } from './store/user/user.action';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }

            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop/*" element={<Shop />} />
                <Route path="/auth" element={<Authentication />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
}

export default App;
