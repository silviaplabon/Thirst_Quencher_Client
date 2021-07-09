import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React from 'react';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51HKPu4GRiKSEnj6YiuI7I9SnppW2Mz8QOVvcOe1DNuTfMX9jdQZJ4twtKlYhigev6QvTpiiBcwgNrB8qFl5Hp94x004328yoxw');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
        <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
    </Elements>
  );
};
export default ProcessPayment;