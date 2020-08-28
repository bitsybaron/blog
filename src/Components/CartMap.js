import React, {useEffect} from 'react';
import axios from 'axios';


function CartMap(props) {
    console.log(props);

    const deleteItem = (product_id) => {
        const {userId} = props.user;
        console.log(product_id, userId)
        
        axios.delete(`/api/item/${product_id}/${userId}`)
        .then(res => console.log('deleted!'))
        .catch(err => console.log(err))
        // have my delete return the entire cart & add getCart
    }
    
    return(
        
    <div>
        <p>{props.cart.product_name}</p>
        <p>{props.cart.price}</p>
        <p>{props.cart.quantity}</p>
        <button onClick={() => deleteItem(props.cart.product_id)}>Remove from Cart</button>
    </div>
    )      
}

export default CartMap;
