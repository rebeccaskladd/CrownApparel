import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './Navigation.scss';

const Navigation = () => {
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
                    <Link className='nav-link' to="/auth">
                        Sign In
                    </Link>
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