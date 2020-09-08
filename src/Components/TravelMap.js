import React, {useState} from 'react';

function TravelMap(props) {
    const [readMore, setReadMore] = useState(false);
    return(
        
    <div className='post' onClick={() => setReadMore(!readMore)}>
        <p className='post-title'>{props.post.title}</p>
        <p className='post-description'>{props.post.description}</p>
        <div className='img-container'><img src={props.post.image}/></div>
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