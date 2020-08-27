import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCart} from '../redux/postReducer';
import axios from 'axios';

function ShopMapped(props) {
    
    const state = useSelector(r => r);
    const dispatch = useDispatch();
    const {product} = props;
    console.log(state);
    const addToCart = () => {
        const {product_id} = product;
        const {userId} = state.user
        console.log(userId)
        
        if (state.cart[0]) {
            for(let i = 0; i < state.cart.length; i++){
                if (state.cart[0].product_id !== product_id){
                    axios.post('/api/item', {userId, product_id})
                    .then(res => 
                    console.log(res.data))
                    .catch(err => console.log(err))
                } else {
                    // add axios call and function that will increase the quantity
                }
            }
        }
        
    }

    return(
        
        
        <div className='product'>
            <p >{product.product_name}</p>
            <p>{product.price}</p>
            <p>{product.product_details}</p>
            <img src={product.image}/>
            <button onClick={addToCart}>Add to Cart</button>

            
        </div>
    )      
}

export default ShopMapped;