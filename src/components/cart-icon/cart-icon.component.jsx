import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action.js';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

//metodo per visualizzaer nell'header l'icona del carrello e il numero dei prodotti
const CartIcon = ({ toggleCartHidden , itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
    </div>
)

//metodo per aggiornare lo stato del popup del carrello
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//metodo per aggiornare lo stato del numero sull'icona del carrello
const mapStateToProps = createStructuredSelector({
    	itemCount: selectCartItemsCount
     });
    
     
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);