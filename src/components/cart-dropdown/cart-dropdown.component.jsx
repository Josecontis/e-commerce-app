import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import '../cart-dropdown/cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

//metodo che gestisce gli item nel carrello popup
const CartDropdown = ({ cartItems }) => ( 
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) //per ogni item vieneapplicata una proprietà definita da CartItem
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

//aggiorna lo stato degli item nel carrello
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
