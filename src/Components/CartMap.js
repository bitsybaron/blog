import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getCart, getTotal} from '../redux/postReducer';


function CartMap(props) {
    const state = useSelector(r => r);
    const dispatch = useDispatch();
   

    const deleteItem = (product_id) => {
        const {userId} = props.user;
        console.log(product_id, userId)
        
        axios.delete(`/api/item/${product_id}/${userId}`)
        .then(res => {
            dispatch(getCart(res.data))
            console.log(props)
            
        })
        .catch(err => console.log(err))
        

        // have my delete return the entire cart & add getCart
    }

    const increment = () => {
        const {product_id} = props.cart;
        const {userId} = state.user
        console.log(product_id, userId)
        axios.put(`/api/item/${userId}/${product_id}`)

                    .then(res => {
                        
                        dispatch(getCart(res.data))
                        console.log('incremented!')
                    })
                    .catch(err => console.log(err))
    }

    const decrement = () => {
        const {product_id} = props.cart;
        const {userId} = state.user
        console.log(product_id, userId)
        axios.put(`/api/items/${userId}/${product_id}`)

                    .then(res => {
                        
                        dispatch(getCart(res.data))
                        console.log('decremented')
                    })
                    .catch(err => console.log(err))
    }

    
    return(
        
    <div>
        <p>{props.cart.product_name}</p>
        <img className='cart-pic' src={props.cart.image}/>
        <p>${props.cart.price}</p>
        <button onClick={decrement}>-</button>
        <p>{props.cart.quantity}</p>
        <button onClick={increment}>+</button>
        
        <button onClick={() => deleteItem(props.cart.product_id)}>Remove from Cart</button>
    </div>
    )      
}

export default CartMap;

