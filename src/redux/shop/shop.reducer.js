import ShopActionTypes from './shop.types';

//assegna allo stato iniziale della collection a null
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

//riceve l'azione da applicare allo state (es SET USER LOGIN)
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;