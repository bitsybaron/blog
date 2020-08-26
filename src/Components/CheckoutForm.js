// import React, {useState, useEffect} from 'react';
// import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import Axios from 'axios';

// function CheckoutForm() {
//   const [succeeded, setSucceeded] = useState(false);
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState('');
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     Axios.post('/create-payment-intent', {items: 'xl-tshirt'})
//     .then(res => {
//         setClientSecret(res.data.clientSecret)
//     })
//   }, []);
//   const handleChange = async (event) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };

//   const payload = stripe.confirmCardPayment(clientSecret, {
//     payment_method: {
//       card: elements.getElement(CardElement),
//       billing_details: {
//         name: ev.target.name.value
//       }
//     }
//   });

//   const CARD_ELEMENT_OPTIONS = {
//     style: {
//       base: {
//         color: "#32325d",
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: "#aab7c4",
//         },
//       },
//       invalid: {
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };
//     return (
//         <div>
//            Card input blah blah blah blah blah blah blah blah balh
//             <CardElement options={CARD_ELEMENT_OPTIONS}/>
//         </div>
//     )
// }

// export default CheckoutForm;