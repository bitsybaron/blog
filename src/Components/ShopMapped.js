import React, {useState} from 'react';

function ShopMapped(props) {
    const [readMore, setReadMore] = useState(false);
    console.log(props)
    return(
        
        <div className='product'>
            <p >{props.product.product_name}</p>
            
        </div>
    )      
}

export default ShopMapped;