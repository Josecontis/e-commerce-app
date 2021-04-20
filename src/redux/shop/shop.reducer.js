import ShopActionTypes from './shop.types';

//assegna allo stato iniziale della collection a null
const INITIAL_STATE = {
  collections: null
};

//riceve l'azione da applicare allo state (es SET USER LOGIN)
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;