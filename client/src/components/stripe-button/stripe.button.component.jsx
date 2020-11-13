import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
    const priceForStripe = price * 100;
    const publishibleKey = 'pk_test_51HdGaHE2h6MmAbhcf3OxO9mibMGVifBcIVKOyQXeVt1AuD1CCAKKdzq554qLbkopCHVc9RBu6AFJ0n885YVJSnFN00WbAHfsi9';

    const onToken = token => {
        axios({
            url: 'payment', 
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            clearCart();
            alert("Payment was successful");
            
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert(
                'There was an issue with your payment. Please make sure you use provided creditcard numbers'
            )
        })
    };

    return(
        <StripeCheckout 
            label='Pay Now'
             name='My E-store'
             billingAddress
             shippingAddress
             description={`Your total is $${price}`}
             amount={priceForStripe}
             panelLabel='Pay Now'
             token={onToken}
             stripeKey={publishibleKey}
        />
    )
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});


export default connect(null, mapDispatchToProps)(StripeCheckoutButton)