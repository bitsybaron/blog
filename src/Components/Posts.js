import React, {useState, useEffect} from 'react';
import Post from './Post'
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../redux/reducer';
import axios from 'axios';

function Posts() {
    const state = useSelector((r) => r.reducer); 
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get('/api/posts')
        .then(res => {
            dispatch(getPosts(res.data))
        }).catch(err => console.log(err))
    }, [])
    
    
    return(
        <div className='new'>
        <div className='newsletter'>
                <h2>Sign Up for Our Newsletter!</h2>
                <p>Get your weekly dose of celeb goss and style inspiration.</p>
                <input placeholder='Email'/>
                <button>Sign Up</button>

        </div>
        <div className='post-container'>
            
            {state.posts.map(post => {
                return <Post key={post.post_id} post={post}/>
            })}

        </div>
        </div>
        
        
    )
}

export default Posts;