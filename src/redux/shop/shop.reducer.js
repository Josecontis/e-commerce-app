import SHOP_DATA from './shop.data';

//assegna allo stato iniziale l'hashtable shopdata
const INITIAL_STATE = {
	collections: SHOP_DATA
};

//riceve l'azione da applicare allo state (es SET USER LOGIN)
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default shopReducer;