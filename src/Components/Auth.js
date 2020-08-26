import React, {useState} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {registerUser} from '../redux/postReducer';
import { useHistory } from "react-router-dom";

const Auth = () => {
    const user = useSelector(r => r.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [existingUser, setExistingUser] = useState('');
    

    const register = (props) => {
        
        axios.post('/auth/register', {name, email, password})
        .then(res => {
            dispatch(registerUser(res.data))
            console.log('registered!')
            history.push('/shop')
        }).catch(err => console.log(err))
    };

    return(
        <div>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            Email 
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => register()}>Register for an Account</button><br/><br/>
            Aready have an account? <p>Login Here</p>

            
        </div>
    )
}

export default Auth;