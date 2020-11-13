import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, LogoContainer, NameContainer, OptionsContainer, OptionDiv, OptionLink, LogoImg, TextLogo, LetterLogoSvg } from './header.styles';
import logo from '../../assets/logo.png';
import textLogo from '../../assets/textLogo.svg';
import LogRocket from '../logo/logo.text';

const Header = ({ currentUser, hidden, signOutStart }) => {

    useEffect(() => {
        const tl = gsap.timeline();
    
        tl.fromTo("#logoPic", 0.6, { y: -50, opacity: 0 }, {y: 0, opacity:1, delay: 0.5 });
    //    tl.fromTo("#name", 1.6, { y: 0, opacity: 0 }, {y: 0, opacity:1 });
      }, []);

    return (
    <HeaderContainer >
        <LogoContainer to="/" >
            <LogoImg id="logoPic" src={logo} alt="Logo" />
            <LetterLogoSvg>
                <LogRocket />
            </LetterLogoSvg>
        </LogoContainer>
        
        <OptionsContainer >
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
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
