import React, {useEffect} from 'react';
import CartMap from './CartMap'
import {useSelector, useDispatch} from 'react-redux';
import {getCart, getTotal} from '../redux/reducer';
import axios from 'axios';
import Checkout from './Checkout'


function Cart() {
    const auth = useSelector(r => r.authReducer); 
    const state = useSelector(r => r.reducer);
    const dispatch = useDispatch();
    
    

    useEffect(() => {
        const {userId} = auth.user;
        axios.get(`/api/cart/${userId}`)
        .then(res => {
            dispatch(getCart(res.data))
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const {userId} = auth.user;
        axios.get(`/api/total/${userId}`)
        .then(res => {
            const [total] = res.data
            const {sum} = total
            dispatch(getTotal(+sum))
        })
        .catch(err => console.log(err))
    }, [state.cart])
    

    
    return(
        
        <div className='what'>
            {auth.isLoggedIn ? <p className='myCart'>My Cart</p> : null}
            <div className='cart-container'>
            {state.cart.map(cart => {
                return <CartMap key={cart.order_id} cart={cart} user={auth.user}/>
            })}
            </div>
            {state.cart.length > 0 ? <div className='total-container'>
            <p>Total: ${state.total}</p>
            <Checkout 
                                total={state.total * 100}
                                getUser={auth.user} 
                                // orderId?
                                user={auth.user.userId} /> </div> : <p className='alternate'>Cart items go here!</p>}
           
        </div>
    
    )
            }

export default Cart;