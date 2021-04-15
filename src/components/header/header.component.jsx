import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Logo from '../../assets/logo-remoteangel.png';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import '../header/header.styles.scss';

const Header = ({ hidden }) => (
    <div className='header'>
        <div className='logo-container'>
        <Link to='/'> {/*Link è il tag per collegare una voce all'url in qst caso alla homepage*/}
        <img src={Logo} alt="website logo" />
        </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                HOME
            </Link>
            <Link className='option' to='/contact'>
                CHI SIAMO
            </Link>
            <Link className='option' to='/shop'>
                PRODOTTI
            </Link>
            <Link className='option' to='/shop'>
                SETTORI
            </Link>
            <Link className='option' to='/shop'>
                SERVIZI
            </Link>
            <Link className='option' to='/shop'>
                NEWS ED EVENTI
            </Link>
            <Link className='option' to='/shop'>
                BLOG
            </Link>
            <Link className='option' to='/shop'>
                FAQ
            </Link>
            <Link className='option' to='/shop'>
                CONTATTI
            </Link>
        </div>
        { //se hidden è falso allora devi visualizzare il popup del carrello altrimenti null
            hidden ? null :
                <CartDropdown />
        }
    </div>
);

//metodo che collega i due stati alla barra header: lo stato di signout e lo stato del popup del carrello
const mapStateToProps = createStructuredSelector({ //state è rootreducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
