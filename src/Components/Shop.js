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
            <div>
    {auth.isLoggedIn ? <p>Happy shopping, {auth.user.name}!</p> :
     null}

            </div>
            {state.products.map(product => {
                return <ShopMapped key={product.product_id} product={product}/>
            })}
        </div>
    )
}

export default Shop;