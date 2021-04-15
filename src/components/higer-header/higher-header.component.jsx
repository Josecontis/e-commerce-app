import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as LogoAssistance } from '../../assets/num.svg';
import { ReactComponent as IcoFb } from '../../assets/fb-icon.svg';
import { ReactComponent as IcoTw } from '../../assets/tw-icon.svg';
import { ReactComponent as IcoIn } from '../../assets/in-icon.svg';
import { ReactComponent as IcoYt } from '../../assets/yt-icon.svg';
import { auth } from '../../firebase/firebase.utils.js';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import '../../components/higer-header/higher-header.styles.scss';

const HigherHeader = ({ currentUser, hidden }) => (
    <div className='higher-header'>
        <Link className='higher-header' to='/'> {/*Link è il tag per collegare una voce all'url in qst caso alla homepage*/}
            <LogoAssistance />
        </Link>
        <div className='options'>
            SEGUICI SU:
            <Link className='icon' to='/facebook' />
            <IcoFb />
            <Link className='icon' to='/twitter' />
            <IcoTw />
            <Link className='icon' to='/linkedin' />
            <IcoIn />
            <Link className='icon' to='/youtube' />
            <IcoYt />
        </div>
        <div className='options'>
            {
                currentUser ?
                    <div className='options' onClick={() => auth.signOut()}>ESCI</div>
                    :
                    <Link className='options' to='/signin'>ACCEDI</Link>
            }
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

export default connect(mapStateToProps)(HigherHeader);
