import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IhrFwDbFUs2oD2rabE4NRhFgn7OEnEphatEerZh4TSQ3FI7XaOgJ4cVIfytvIiGNevtV2fdL5tX1mnWQ0BEXQeG00dggCg7bv';
    
    const onToken = token => {
        console.log(token)
        alert('Payement Successful');
    }
    
    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken} //è l'evento trigger quando si preme invio
        stripeKey={publishableKey}
        />
        );
    };
    
    export default StripeCheckoutButton;