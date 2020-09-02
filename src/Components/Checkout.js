import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getCart} from '../redux/reducer';


const Checkout = (props) => {
    const dispatch = useDispatch();
    const onToken = async(token) => {
        token.card = void 0;
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        await axios.post('/api/payment', {token, amount: props.total, user_id: props.user, date: today})
        .then(res => {
            alert('payment complete')
            console.log(res.data)
            dispatch(getCart(res.data))

        })
    }

    
    return(
            <div>
                <StripeCheckout 
                    label="Proceed to Checkout"
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    amount={props.total}
                    />
            </div>
        )
    
}

export default Checkout;