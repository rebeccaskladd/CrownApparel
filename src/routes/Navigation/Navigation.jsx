import { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utilities/firebase/firebase';

import './Navigation.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
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
                    <Link className='nav-link' to="/viewcart">
                        View Cart
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;