import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser, hidden }) => (
    <div className='header' >
        <Link className='logo_container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                (<div className='options' onClick={() => auth.signOut()}>Sign Out</div>)
                :
                (<Link className='options' to='/signin' >Sign In</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header);