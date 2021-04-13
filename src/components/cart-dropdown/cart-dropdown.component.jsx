import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import '../cart-dropdown/cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

//metodo che gestisce gli item nel carrello popup
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                //se la lunghezza è maggiore di 0 è vero
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) //per ogni item vieneapplicata una proprietà definita da CartItem
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton> {/*history.push è il link della pagina passata in input */}
    </div>
);

//aggiorna lo stato degli item nel carrello
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); //with router serve a collegare il pulsante al link della pagina senza di esso history non ha senso di esistere
