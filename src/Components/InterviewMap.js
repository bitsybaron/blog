import React, {useState} from 'react';

function InterviewMap(props) {
    const [readMore, setReadMore] = useState(false);
    return(
        
        <div className='post-guy' onClick={() => setReadMore(!readMore)} className='post'>
            <div>
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
        </div>
    )      
}

export default InterviewMap;