import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getCart} from '../redux/postReducer';


function CartMap(props) {
    const dispatch = useDispatch();
   

    const deleteItem = (product_id) => {
        const {userId} = props.user;
        console.log(product_id, userId)
        
        axios.delete(`/api/item/${product_id}/${userId}`)
        .then(res => {
            dispatch(getCart(res.data))
        })
        .catch(err => console.log(err))
        // have my delete return the entire cart & add getCart
    }
    
    return(
        
    <div>
        <p>{props.cart.product_name}</p>
        <img className='cart-pic' src={props.cart.image}/>
        <p>${props.cart.price}</p>
        <p>{props.cart.quantity}</p>
        <button onClick={() => deleteItem(props.cart.product_id)}>Remove from Cart</button>
    </div>
    )      
}

export default CartMap;

