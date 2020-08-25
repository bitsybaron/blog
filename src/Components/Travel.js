import React, {useState, useEffect} from 'react';
import TravelMap from './TravelMap'
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../redux/postReducer';
import axios from 'axios';

function Travel() {
    const posts = useSelector((r) => r.posts); 
    const dispatch = useDispatch();
    

    useEffect(() => {
        axios.get(`/api/filtered/posts/${'travel'}`)
        .then(res => {
            dispatch(getPosts(res.data))
        }).catch(err => console.log(err))
    }, [])
    
    
    return(
        
        <div>
            {posts.map(post => {
                return <TravelMap key={post.post_id} post={post}/>
            })}
        </div>
    )
}

export default Travel;