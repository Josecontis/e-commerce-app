import React from 'react';
import {CartItemContainer, CartItemDetail, CartItemName, CartItemImage} from './cart-item.styles';

//metodo che definisce la visualizzazione di ogni item aggiunto al carrello come ad esempio la quantità che viene aggiornata di volta in volta
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => ( //splitta le props di item passato come parametro
    <CartItemContainer>
        <CartItemImage src={imageUrl}/>
        <CartItemDetail>
            <CartItemName>{name}</CartItemName>
            <span>{quantity} x ${price}</span>
        </CartItemDetail>
    </CartItemContainer>
)

export default CartItem;