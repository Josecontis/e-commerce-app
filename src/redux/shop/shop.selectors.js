import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionFromPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
//tramite la lista di chiavi verifica il match con l'id della collection e restituisce la collection corrispondente (es array di HATS)

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

  export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
  );

  //metodo per eliminare l'errore del title null, perchè sarà verificata se la collezione è null o no al refresh iniziale della pagina
  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections //!!0 è false quindi se la collection è stata caricata sarà true altimenti false
  );