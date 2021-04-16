import { createSelector } from 'reselect';

const selectShop = state => state.shop;

//crea una lista di chiavi identificate da un id intero
const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	women: 4,
	men: 5
}

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionFromPreview = createSelector(
		[selectCollections],
		collections => Object.keys(collections).map(key => collections[key])
	)

export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		//tramite la lista di chiavi verifica il match con l'id della collection e restituisce la collection corrispondente (es array di HATS)
		collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
	)