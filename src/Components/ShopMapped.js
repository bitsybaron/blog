import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCart} from '../redux/reducer';
import axios from 'axios';

function ShopMapped(props) {
    
    const state = useSelector(r => r.reducer);
    const auth = useSelector(r => r.authReducer);
    const dispatch = useDispatch();
    const {product} = props;
    console.log(state);
    const addToCart = () => {
        const {product_id} = product;
        
        const {userId} = auth.user
        
        // console.log(userId, product_id)
            if (state.cart.length === 0) {
                console.log('hey there')
                axios.post('/api/item', {userId, product_id})
                .then(res => {
                    dispatch(getCart(res.data))
                    
                    console.log(state.total)
                })
                .catch(err => console.log(err))
                

            } else {
                let unique = false;
                for(let i = 0; i < state.cart.length; i++){
                    if (state.cart[i].product_id === product_id) {
                        unique = true;
                        
                    } 
                    
                
            }
            if (unique){
                console.log('put')
                axios.put(`/api/item/${userId}/${product_id}`)

                    .then(res => {
                        
                        dispatch(getCart(res.data))
                        
                        console.log(state.total)
                    })
                    .catch(err => console.log(err))
            } else {
                console.log('second post')
                axios.post('/api/item', {userId, product_id})
                .then(res => {
                    dispatch(getCart(res.data))
                    
                    console.log(state.total)
                })
                .catch(err => console.log(err))
            }
            
            }
            
        
    }

    return(
        
        
        <div className='product'>
            <p >{product.product_name}</p>
            <p>{product.price}</p>
            <p>{product.product_details}</p>
            <img src={product.image}/>
            <button onClick={() => { auth.isLoggedIn ? 
                addToCart() : alert('please log in to shop!') }}>Add to Cart</button>

            
        </div>
    )      
}

export default ShopMapped;