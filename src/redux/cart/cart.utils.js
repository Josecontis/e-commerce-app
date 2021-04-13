
// metodo per aggiungere gli items al carrello passando la lista dei prodotti esistenti e concatenando altri nuovi prodotii in append
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); //restituisce il prodotto duplicato con la quantità aggiornata

    if (existingCartItem) { //se non è null allora esiste nel carrello incrementa la quantità relativa al prodotto corrispondente altrimenti restituisce l'item
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    // se non esiste già nel carrello restituisce l'item nuovo con quantità 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};