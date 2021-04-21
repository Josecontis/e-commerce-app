import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/checkout/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>PRODUCT</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>DESCRIPTION</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>QUANTITY</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>PRICE</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>REMOVE</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
              *Please use the followig test credit cards for payments*
              <br/>
              4242 4242 4242 4242 - Exp: 01 / 22 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

//aggiorna lo stato degli item nel carrello ovvero il prezzo e gli item nel carrello
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);