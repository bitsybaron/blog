import React, {useEffect} from 'react';
import CartMap from './CartMap'
import {useSelector, useDispatch} from 'react-redux';
import {getCart, getTotal} from '../redux/postReducer';
import axios from 'axios';
import Checkout from './Checkout'


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
    }, [])

    useEffect(() => {
        const {userId} = state.user;
        axios.get(`/api/total/${userId}`)
        .then(res => {
            const [total] = res.data
            const {sum} = total
            dispatch(getTotal(+sum))
        })
        .catch(err => console.log(err))
    }, [state.cart])
    

    
    return(
        
        <div>
            {cart.map(cart => {
                return <CartMap key={cart.order_id} cart={cart} user={state.user}/>
            })}
            
            {cart.length > 0 ? <div>
            <p>Total: {state.total}</p>
            <Checkout 
                                total={state.total * 100}
                                getUser={state.user} 
                                // orderId?
                                user={state.user.userId} /> </div> : <p>Cart items go here!</p>}
           
        </div>
    
    )
            }

export default Cart;