import React, {useState} from 'react';

function ShopMapped(props) {
    const [readMore, setReadMore] = useState(false);
    console.log(props)
    const {product} = props;
    return(
        
        
        <div className='product'>
            <p >{product.product_name}</p>
            <p>{product.price}</p>
            <p>{product.product_details}</p>
            <img src={product.image}/>
            <button>Add to Cart</button>
            
            
        </div>
    )      
}

export default ShopMapped;