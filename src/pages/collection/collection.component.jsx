import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

//metodo per visualizzare l'intera collezione di HATS, JACKETS.. su ogni pagina corrispondente
const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return ( 
	  <CollectionPageContainer>
		<CollectionTitle>{title.toUpperCase()}</CollectionTitle>
		<CollectionItemsContainer>
		  {items.map(item => (
			<CollectionItem key={item.id} item={item} />
		  ))}
		</CollectionItemsContainer>
	  </CollectionPageContainer>
	);
  };
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state) //la collection viene creata dinamicamente a seconda della pagina (es HATS, JACKETS...)
})

export default connect(mapStateToProps)(CollectionPage);