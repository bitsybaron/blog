import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getCart} from '../redux/reducer';


function CartMap(props) {
    const auth = useSelector(r => r.authReducer);
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
        

        
    }

    const increment = () => {
        const {product_id} = props.cart;
        const {userId} = auth.user
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
        const {userId} = auth.user
        console.log(product_id, userId)
        axios.put(`/api/items/${userId}/${product_id}`)

                    .then(res => {
                        
                        dispatch(getCart(res.data))
                        console.log('decremented')
                    })
                    .catch(err => console.log(err))
    }

    
    return(
        
    <div className='cart'>
        {props.cart.quantity > 0 ? 
        <div className='cart-child'><span className='item-name'>{props.cart.product_name} <span>${props.cart.price}</span></span>
        <img className='cart-pic' src={props.cart.image}/>
        <div className='crement-container'>
        <button className='crement'onClick={props.cart.quantity !== 1 ? () => decrement() : () => deleteItem(props.cart.product_id)}>-</button>
        <span>{props.cart.quantity}</span>
        <button className='crement' onClick={increment}>+</button>
        </div>
        <button className='remove' onClick={() => deleteItem(props.cart.product_id)}>Remove Items</button>
        </div> : null}
    </div>
    )      
}

export default CartMap;

