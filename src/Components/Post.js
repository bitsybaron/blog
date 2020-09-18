import React, {useState} from 'react';

function Post(props) {
    const [readMore, setReadMore] = useState(false);
    return(
        
        <div onClick={() => setReadMore(!readMore)} className='post'>
            <p className='post-title'>{props.post.title}</p>
            <p className='post-description'>{props.post.description}</p>
            <div className='img-container'><img src={props.post.image}/></div>
            {readMore === false ? 
            <p className='read' onClick={() => setReadMore(true)}>Read more...</p> : 
            <div>
            <p className='content'>{props.post.content}</p>
            <p className='read' onClick={() => setReadMore(false)}>Read Less</p>
            </div>}
        </div>
    )      
}

export default Post;