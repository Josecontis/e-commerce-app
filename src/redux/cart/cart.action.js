import CartActionTypes from './cart.types';
//metodi per definire lo stato del popup e della lista degli item

export const toggleCartHidden = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})