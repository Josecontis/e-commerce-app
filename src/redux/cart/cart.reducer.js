import CartActionTypes from './cart.types.js';
import {addItemToCart} from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true, //indica lo stato del popup carrello
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //append agli item esistenti i nuovi
            }
        default:
            return state;
    }
}
export default cartReducer;