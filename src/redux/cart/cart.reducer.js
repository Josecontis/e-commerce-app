import CartActionTypes from './cart.types.js';
import {addItemToCart} from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true, //indica lo stato del popup carrello
    cartItems: [] //vettore che racchiude gli elementi del carrello
};

// si parte da uno stato iniziale e si esegue un azione
const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) // se il tipo di questa azione è nascondi popup carrello allora restituisci il falso di hidden
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM: // se il tipo di questa azione è aggiungi al carrello 
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //append agli item esistenti i nuovi con l'incremento della quantità se già presenti
            }
        default:
            return state; //altrimenti restituisci lo stato non modificato
    }
}
export default cartReducer;