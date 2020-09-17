import React, {useState} from 'react';

function StyleMap(props) {
    const [readMore, setReadMore] = useState(false);
    return(
        
        <div className='post-guy' onClick={() => setReadMore(!readMore)} className='post'>
            <p className='post-title'>{props.post.title}</p>
            <p className='post-description'>{props.post.description}</p>
            <div className='img-container'><img src={props.post.image}/></div>
            {readMore === false ? 
            <p onClick={() => setReadMore(true)}>Read more...</p> : 
            <p className='content'>{props.post.content}</p>}
        </div>
    )      
}

export default StyleMap;