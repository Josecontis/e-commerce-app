import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../categories/collection/collection.component';

//questo metodo serve ad applicare lo stesso stile(shop-page) a CollectionsOverview(ovvero le preview dei primi 4 items) e CollectionPage(ovvero le pagine con tutti gli item)
const ShopPage = ({ match }) => {
console.log(match);

return(
	<div className='shop-page'> 
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />{/*collectionId: HATS, JACKETS.. e match.path è il percorso base es. localhost..*/}
	</div>
);
};

export default ShopPage;