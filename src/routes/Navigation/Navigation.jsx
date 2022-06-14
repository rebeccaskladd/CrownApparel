import { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utilities/firebase/firebase';

import CartIcon from '../../components/CartIcon/CartIcon';

import './Navigation.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links">
                    <Link className='nav-link' to="/shop">
                        Shop
                    </Link>
                    <Link className='nav-link' to="/contact">
                        Contact
                    </Link>
                    {
                        currentUser ?
                            (
                                <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                            ) :
                            (
                                <Link className='nav-link' to="/auth">
                                    Sign In
                                </Link>
                            )

                    }
                    <Link className='nav-link' to="/cart">
                        <CartIcon />
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;