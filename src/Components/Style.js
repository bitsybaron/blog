import React, {useState, useEffect} from 'react';
import StyleMap from './StyleMap'
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../redux/postReducer';
import axios from 'axios';

function Style() {
    const posts = useSelector((r) => r.posts); 
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get(`/api/filtered/posts/${'style'}`)
        .then(res => {
            dispatch(getPosts(res.data))
        }).catch(err => console.log(err))
    }, [])
    
    
    return(
        
        <div>
            {posts.map(post => {
                return <StyleMap key={post.post_id} post={post}/>
            })}
        </div>
    )
}

export default Style;