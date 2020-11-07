import React, { useEffect } from 'react';
import { TimelineMax } from "gsap";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

// import './header.styles.scss';
import { HeaderContainer, LogoContainer, NameContainer, OptionsContainer, OptionDiv, OptionLink, LogoImg } from './header.styles';
import logo from '../../assets/logo.png';

const Header = ({ currentUser, hidden, signOutStart }) => {

    useEffect(() => {
        const tl = new TimelineMax();
    
        tl.fromTo("#logoPic", 0.6, { y: -50, opacity: 0 }, {y: 0, opacity:1, delay:1 });
        tl.fromTo("#name", 1.6, { y: 0, opacity: 0 }, {y: 0, opacity:1 });
      }, []);

    return (
    <HeaderContainer >
        <LogoContainer to="/" >
            <LogoImg id="logoPic" src={logo} alt="Logo" />
            <NameContainer id="name" >Great Outdoors</NameContainer>
        </LogoContainer>
        
        <OptionsContainer >
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                (<OptionDiv onClick={signOutStart}>Sign Out</OptionDiv>)
                :
                (<OptionLink to='/signin' >Sign In</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown />
        }
    </HeaderContainer>
)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);