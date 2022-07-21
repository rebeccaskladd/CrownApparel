import { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utilities/firebase/firebase';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './Navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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
                                <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
                            ) :
                            (
                                <NavLink to="/auth">
                                    Sign In
                                </NavLink>
                            )

                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;