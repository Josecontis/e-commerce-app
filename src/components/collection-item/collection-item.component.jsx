import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
import '../collection-item/collection-item.styles.scss';

/*metodo che definisce lo stile per singoli item o prodotti*/
const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
	<div className="collection-item">
		<div 
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}$</span>
		</div>
		<CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
		
	</div>
)};

//metodo per aggiungere al carrello gli item gli items
const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
