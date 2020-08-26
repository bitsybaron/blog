import React, {useState, useEffect} from 'react';
import CartMap from './CartMap'
import {useSelector, useDispatch} from 'react-redux';
import {getCart} from '../redux/postReducer';
import axios from 'axios';

function Cart() {
    const cart = useSelector((r) => r.cart); 
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get('/api/cart')
        .then(res => {
            dispatch(getCart(res.data))
        }).catch(err => console.log(err))
    }, [])
    
    
    return(
        
        <div>
            {cart.map(cart => {
                return <CartMap key={cart.post_id} post={cart}/>
            })}
        </div>
    )
}

export default Cart;