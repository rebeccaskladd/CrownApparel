import { GlobalStyle } from './global.styles';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

import { checkUserSession } from './store/user/user.action';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);

    return (
        <div>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="/shop/*" element={<Shop />} />
                    <Route path="/auth" element={<Authentication />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
