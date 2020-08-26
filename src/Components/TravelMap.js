import React, {useState} from 'react';

function TravelMap(props) {
    const [readMore, setReadMore] = useState(false);
    return(
        
    <div className='post'>
        <p className='post-title'>{props.post.title}</p>
        <p>{props.post.description}</p>
        <img src={props.post.image}/>
        {readMore === false ? 
        <p onClick={() => setReadMore(true)}>Read more...</p> : 
        <div>
        <p>{props.post.content}</p>
        <p onClick={() => setReadMore(false)}>Read Less</p>
        </div>}
    </div>
    )      
}

export default TravelMap;