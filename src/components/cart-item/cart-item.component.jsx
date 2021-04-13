import React from 'react';
import '../cart-item/cart-item.styles.scss';

//metodo che definisce la visualizzazione di ogni item aggiunto al carrello come ad esempio la quantità che viene aggiornata di volta in volta
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => ( //splitta le props di item passato come parametro
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;