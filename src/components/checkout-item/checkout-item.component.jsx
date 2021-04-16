import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const checkoutItem = ({ clearItem, cartItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return(
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt='item' />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div> {/*CARATTERE PER STAMPARE LA FRECCIA di decrementa*/}
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div> {/*CARATTERE PER STAMPARE LA FRECCIA di incrementa*/}
			</span>
			<span className="price">{price}$</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>{/*CARATTERE PER STAMPARE LA croce di rimuovi*/}
		</div>
	);	
};

//metodo per effettuare le operazioni sugli item nel carrello come rimuovi incrementa o decrementa 
const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(checkoutItem);