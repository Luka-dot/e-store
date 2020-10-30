import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishibleKey = 'pk_test_51HdGaHE2h6MmAbhcf3OxO9mibMGVifBcIVKOyQXeVt1AuD1CCAKKdzq554qLbkopCHVc9RBu6AFJ0n885YVJSnFN00WbAHfsi9';

    const onToken = token => {
        axios({
            url: 'payment', 
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment was successful")
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
        //     image='https://scgshare.com/i/CUz.svg'
             description={`Your total is $${price}`}
             amount={priceForStripe}
             panelLabel='Pay Now'
             token={onToken}
             stripeKey={publishibleKey}
        />
    )
};

export default StripeCheckoutButton