import { Fragment, useContext } from 'react';
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User';
import { CartContext } from '../../contexts/Cart';
import { signOutUser } from '../../utilities/firebase/firebase';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './Navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    const toggleDropdown = () => setIsCartOpen(!isCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        Shop
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    {
                        currentUser ?
                            (
                                <NavLink as="span" onClick={signOutHandler}>Sign Out</NavLink>
                            ) :
                            (
                                <NavLink to="/auth">
                                    Sign In
                                </NavLink>
                            )

                    }
                    <span onClick={toggleDropdown}>
                        <CartIcon />
                    </span>
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;