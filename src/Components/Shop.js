import React, {useEffect} from 'react';
import ShopMapped from './ShopMapped'
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../redux/reducer';
import axios from 'axios';

function Shop() {
    const auth = useSelector(r => r.authReducer);
    const state = useSelector(r => r.reducer);
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get(`/api/products/`)
        .then(res => {
            dispatch(getProducts(res.data))
        }).catch(err => console.log(err))
    }, [state.cart])
    
    return(
        <div>
            <div className='shop-welcome'>
            {auth.isLoggedIn ? <h3>Happy shopping, {auth.user.name}!</h3> :
             null}

            </div>
        <div className='shop-container'>
            {state.products.map(product => {
                return <ShopMapped key={product.product_id} product={product}/>
            })}
        </div>
        </div>
    )
}

export default Shop;