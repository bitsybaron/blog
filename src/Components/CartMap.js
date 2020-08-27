import React, {useState} from 'react';
import axios from 'axios';


function CartMap(props) {
    console.log(props);

    const deleteItem = () => {
        const {order_id} = props.cart;
        axios.delete(`/api/item/${order_id}`)
        .then(res => console.log('deleted!'))
        .catch(err => console.log(err))
    }
    
    return(
        
    <div>
        <p>{props.cart.product_name}</p>
        <p>{props.cart.price}</p>
        <p>{props.cart.quantity}</p>
        <button onClick={deleteItem}>Remove from Cart</button>
//ADD USEEFFECT TO FIX THE RENDER OF THE DELETED ITEMS?
    </div>
    )      
}

export default CartMap;