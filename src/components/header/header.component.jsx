import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {HeaderContainer, OptionsContainer, OptionDiv, OptionLink, LogoContainer} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'> {/*Link è il tag per collegare una voce all'url in qst caso alla homepage*/}
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>{/*se l'utente è loggato allora visualizza in header testo SIGN OUT e se viene cliccato richiama il metodo signout per uscire*/}
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { //se hidden è falso allora devi visualizzare il popup del carrello altrimenti null
            hidden ? null :
                <CartDropdown />
        }
    </HeaderContainer>
);

//metodo che collega i due stati alla barra header: lo stato di signout e lo stato del popup del carrello
const mapStateToProps = createStructuredSelector({ //state è rootreducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);