import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionFromPreview } from '../../redux/shop/shop.selectors';

import {CollectionsOverviewStyles} from './collection-overview.styles.jsx';

//metodo che crea le componenti della pagina shop <4 items
const CollectionsOverview = ({ collections }) => ( 
	<CollectionsOverviewStyles>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</CollectionsOverviewStyles>
);


const mapStateToProps = createStructuredSelector({
	collections: selectCollectionFromPreview
})

export default connect(mapStateToProps)(CollectionsOverview);