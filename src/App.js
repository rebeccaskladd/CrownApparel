import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';

const Shop = () => {
    return (
        <div>
            <h1>I am the shop page</h1>
        </div>
    )
}

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/auth" element={<Authentication />} />
            </Route>
        </Routes>
    );
}

export default App;
