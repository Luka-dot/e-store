import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishibleKey = 'pk_test_51HdGaHE2h6MmAbhcf3OxO9mibMGVifBcIVKOyQXeVt1AuD1CCAKKdzq554qLbkopCHVc9RBu6AFJ0n885YVJSnFN00WbAHfsi9';

    const onToken = token => {
        console.log(token);
        alert('Payment was Succesful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
             name='My E-store'
             billingAddress
             shippingAddress
             image='https://scgshare.com/i/CUz.svg'
             description={`Your total is $${price}`}
             amount={priceForStripe}
             panelLabel='Pay Now'
             token={onToken}
             stripeKey={publishibleKey}
        />
    )
};

export default StripeCheckoutButton