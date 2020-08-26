import React from 'react';
import InterviewMap from './InterviewMap'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../redux/postReducer';
import axios from 'axios';

const Interviews = () => {
    const posts = useSelector(r => r.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/api/filtered/posts/${'interview'}`)
        .then(res => {
            dispatch(getPosts(res.data))
        }).catch(err => console.log(err))
    }, [])

    return(
        <div>
            {posts.map(post => {
                return <InterviewMap key={post.post_id} post={post}/>
            })}
        </div>
    )
}

export default Interviews;