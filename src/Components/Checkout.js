import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Checkout extends Component {
    onToken = async(token) => {
        token.card = void 0;
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        await axios.post('/api/payment', {token, amount: this.props.total, user_id: this.props.user, date: today})
        .then(res => {
            alert('payment complete')
        })
    }

    render(){
    return(
            <div>
                <StripeCheckout 
                    label="Proceed to Checkout"
                    token={this.onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    amount={this.props.total}
                    />
            </div>
        )
    }
}

export default Checkout;