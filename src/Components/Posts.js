import React, {useState, useEffect} from 'react';
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
            {posts.map((post) => {
                return <div key='post.post_id'>    
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <img src={post.image}/>
                </div>
            })}
        </div>
    )
}

export default Posts;