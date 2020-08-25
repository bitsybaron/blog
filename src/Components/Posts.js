import React, {useState, useEffect} from 'react';
import Post from './Post'
import {useSelector, useDispatch} from 'react-redux';
import {getAllPosts} from '../redux/postReducer';
import axios from 'axios';

function Posts() {
    const posts = useSelector((r) => r.posts); 
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get('/api/posts')
        .then(res => {
            dispatch(getAllPosts(res.data))
        }).catch(err => console.log(err))
    }, [])
    
    
    return(
        
        <div>
            {posts.map(post => {
                return <Post key={post.post_id} post={post}/>
            })}
        </div>
    )
}

export default Posts;