
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError,setPaymentError]=useState(null)
  const [paymentSuccess,setPaymentSuccess]=useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      console.log('[error]', error);
      setPaymentSuccess(null);
      setPaymentError(error.message)
    } else {
        setPaymentError(null)
        setPaymentSuccess(paymentMethod.id);  
      console.log('[PaymentMethod]', paymentMethod);
      handlePayment(paymentMethod.id)
    }
  };

  return (
      <div>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        paymentError && <p style={{color:'red'}}>{paymentError}</p>
    }
    {
        paymentSuccess && <p style={{color:'red'}}>{paymentSuccess}</p>
    }
    </div>
  );
};
export default SimpleCardForm;