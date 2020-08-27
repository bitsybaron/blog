import React, {useState} from 'react';

function CartMap(props) {
    console.log(props);
    
    return(
        
    <div>
        <p>{props.cart.product_id}</p>
    </div>
    )      
}

export default CartMap;