import React, {useState, useEffect} from 'react';
import CartMap from './CartMap'
import {useSelector, useDispatch} from 'react-redux';
import {getCart} from '../redux/postReducer';
import axios from 'axios';

function Cart() {
    const cart = useSelector((r) => r.cart); 
    const state = useSelector(r => r);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const {userId} = state.user;
        axios.get(`/api/cart/${userId}`)
        .then(res => {
            dispatch(getCart(res.data))
        }).catch(err => console.log(err))
    }, [cart])
    
    
    return(
        
        <div>
            {cart.map(cart => {
                return <CartMap key={cart.order_id} cart={cart} user={state.user}/>
            })}
        </div>
    )
}

export default Cart;