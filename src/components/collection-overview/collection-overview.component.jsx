import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections, selectCollectionFromPreview } from '../../redux/shop/shop.selectors';

import '../../components/collection-overview/collection-overview.styles.scss';

//metodo che crea le componenti della pagina shop <4 items
const CollectionsOverview = ({ collections }) => ( 
	<div className="collections-overview">
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);


const mapStateToProps = createStructuredSelector({
	collections: selectCollectionFromPreview
})

export default connect(mapStateToProps)(CollectionsOverview);