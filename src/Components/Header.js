import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Sploosh from '../sploosh.png'
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../redux/authReducer';
import { useHistory } from "react-router-dom";
import hamburger from '../icons8-menu-64.png';
import account from '../icons8-account-48.png';

import axios from 'axios';


function Header() {
    const state = useSelector((r) => r.authReducer);
    const cart = useSelector((r) => r.reducer)
    const dispatch = useDispatch();
    const history = useHistory();
    const {userId} = state.user
    const [cartQuant, setcartQuant] = useState(0);
    const [menu, setMenu] = useState(false);
    

    useEffect(() => {
        if (state.isLoggedIn) {
        console.log(userId)
        axios.get(`/api/items/${userId}`)
        .then(res => {
            console.log(res.data[0].sum)
            setcartQuant(res.data[0].sum)})
        .catch(err => console.log(err))
        }
        

    }, [state, cart.cart])

    const logout = () => {
        axios.get('/auth/logout')
        .then(res => {
            console.log('logged out');
            dispatch(logoutUser());
            history.push('/')
            alert('Sad!! See you soon, hon')


        }).catch(err => console.log(err))
    }


    return (
        <header>
            {menu ? <nav className='header-links'>
                <p>About</p>
                <Link onClick={() => setMenu(!menu)} className='headLink' to='/interviews'><p >Interviews</p></Link>
                <Link onClick={() => setMenu(!menu)} className='headLink' to='/style'><p >Style</p></Link>
                <Link onClick={() => setMenu(!menu)} className='headLink' to='/travel'><p >Travel</p></Link>



            </nav> : <nav className='full-screen-links'>
                <p>About</p>
                <p className='full-screen-link' onClick={() => history.push('/interviews')}>Interviews</p>
                <p className='full-screen-link' onClick={() => history.push('/style')}>Style</p>
                <p className='full-screen-link' onClick={() => history.push('/travel')}>Travel</p> </nav>} 
            
            <img onClick={() => setMenu(!menu)} className='hamburger' src={hamburger}/>
            <Link to='/'><img onClick={() => setMenu(false)} className="sploosh" src={Sploosh}/></Link>
            <img onClick={!state.isLoggedIn ? () => {
                history.push('/auth')
            } : null} className='account' src={account}/>
            <nav className='account-links'>
                <p onClick={() => history.push('/shop')}>Shop</p>
                {!state.isLoggedIn ? <p onClick={() => history.push('/auth')}>Sign Up</p> :
                 <p onClick={() => logout()}>Logout</p>}
                <p onClick={() => history.push('/cart')}>Cart({cartQuant})</p>
            </nav>
            
        </header>
    )
}

export default Header;

