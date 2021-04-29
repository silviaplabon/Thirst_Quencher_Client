import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SplitCardForm.css'


//import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
//   const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:"14px",
          color: "#424770",
          letterSpacing: "0.025em",
          backgroundColor:'white',
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError,setPaymentError]=useState(null)
  const [paymentSuccess,setPaymentSuccess]=useState(null)

  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error, paymentMethod}   = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]",paymentMethod.id);
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
    <form onSubmit={handleSubmit}>
      <label className="mt-3 ms-1">
        Card number
        <CardNumberElement
          className="form-control cardNumberStyle p-2 "
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label className="ms-1">
        Expiration date
        <CardExpiryElement
        className="form-control expStyle"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      
      <label   className="ms-5">
        CVC
        <CardCvcElement
          className="form-control cvcStyle"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <button type="submit" className="btn btn-lg btn-primary mt-2 ms-2" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default SplitCardForm;
