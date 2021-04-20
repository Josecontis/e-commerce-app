import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../../components/collection-item/collection-item.component.jsx';

import { selectCollection } from '../../../redux/shop/shop.selectors.js';

import './collection.styles.scss';

//metodo per visualizzare l'intera collezione di HATS, JACKETS.. su ogni pagina corrispondente
const CollectionPage = ({ match, collection }) => {
	
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className='title'>{ title.toUpperCase() }</h2>
			<div className="items">
				{
					items.map(item => (
						<CollectionItem key={item.id} item={item} /> 
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state) //la collection viene creata dinamicamente a seconda della pagina (es HATS, JACKETS...)
})

export default connect(mapStateToProps)(CollectionPage);