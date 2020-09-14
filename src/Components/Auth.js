import React, {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {registerUser, loginUser} from '../redux/authReducer';
import { useHistory } from "react-router-dom";

const Auth = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [existingUser, setExistingUser] = useState(true);
    

    const register = (props) => {
        
        axios.post('/auth/register', {name, email, password})
        .then(res => {
            dispatch(registerUser(res.data))
            console.log('registered!')
            history.push('/shop')
        }).catch(err => console.log(err))
    };

    const login = (props) => {
        axios.post('/auth/login', {email, password})
        .then(res => {
            dispatch(loginUser(res.data))
            console.log('logged in!')
            history.push('/shop')
        }).catch(err => console.log(err))
    }

    return(
        <div className='auth'> {!existingUser ?
        <div className='register'>
            <h3>Create an Account to Shop our Faves!</h3>
            <p>You'll also have access to monthly specials, and our style Newsletter.</p>
            
            <input className='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            
            <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <input value={password} placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => register()}>Register</button><br/><br/>
            <p onClick={() => setExistingUser(true)} className='switchAuth'>Already have an account?<br/>Login Here</p>   
        </div> : <div className='login'>
            <h3>Welcome back!</h3>
            <input className='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input  placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => login()}>Login</button>
            New to Sploosh? <p onClick={() => setExistingUser(false)} className='switchAuth'>Create an account here</p>
        </div>
        }
        </div>
    )
}

export default Auth;