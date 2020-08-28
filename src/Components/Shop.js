import React, {useEffect} from 'react';
import ShopMapped from './ShopMapped'
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../redux/postReducer';
import axios from 'axios';

function Shop() {
    const shop = useSelector((r) => r.products); 
    const state = useSelector(r => r);
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get(`/api/products/`)
        .then(res => {
            dispatch(getProducts(res.data))
        }).catch(err => console.log(err))
    }, [state.cart])
    
    console.log(shop)
    return(
        
        <div>
            <div>
    {state.isLoggedIn ? <p>Happy shopping, {state.user.name}!</p> :
     null}

            </div>
            {shop.map(product => {
                return <ShopMapped key={product.product_id} product={product}/>
            })}
        </div>
    )
}

export default Shop;