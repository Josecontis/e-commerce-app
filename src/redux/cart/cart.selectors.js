import { createSelector } from 'reselect';

const selectCart = state => state.cart; //legge lo stato del carrello ovvero gli item aggiunti

//metodo che che setta inizialmente il vettore di item nel carrello
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

//metodo che setta inizialmente la quantità di item nel carrello
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

//metodo che setta inizialmente il totale di prezzi degli item nel carrello
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.price, 0)
)