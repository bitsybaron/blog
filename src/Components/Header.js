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
    const [accountDrop, setAccountDrop] = useState(false);
    

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
            alert('Logged out!')


        }).catch(err => console.log(err))
    }


    return (
        <header>
            <div className='socials'>
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/> 
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/> 
            <img src="https://img.icons8.com/color/48/000000/youtube.png"/>
            </div>
            {menu ? <nav className='header-links'>
                <p onClick={() => {
                    history.push('/about')
                    setMenu(!menu)
                }} className='about' className='headLink'>About</p>
                <p onClick={() => {
                    history.push('/interviews')
                    setMenu(!menu)}} className='interviews' className='headLink'>Interviews</p>
                <p onClick={() => {
                    history.push('/style')
                    setMenu(!menu)}} className='style' className='headLink'>Style</p>
                <p onClick={() => {
                    history.push('/travel')
                    setMenu(!menu)}} className='travel' className='headLink' >Travel</p>
                <p onClick={() => {
                    history.push('/shop')
                    setMenu(!menu)}} className='headLink'>Shop</p>



            </nav> : <nav className='full-screen-links'>
                <p onClick={() => history.push('/about')}>About</p>
                <p className='full-screen-link' onClick={() => history.push('/interviews')}>Interviews</p>
                <p className='full-screen-link' onClick={() => history.push('/style')}>Style</p>
                <p className='full-screen-link' onClick={() => history.push('/travel')}>Travel</p> </nav>} 
            
            <img onClick={() => {
                setAccountDrop(false)
                setMenu(!menu)}} className='hamburger' src={hamburger}/>
            <Link to='/'><img onClick={() => {
                setAccountDrop(false)
                setMenu(false)}} className="sploosh" src={Sploosh}/></Link>
            <img onClick={!state.isLoggedIn ? () => {
                setMenu(false)
                history.push('/auth')} : () => {
                setMenu(false);
                setAccountDrop(!accountDrop);
                console.log(accountDrop)
            }} className='account' src={account}/>
            
                {accountDrop ? <div className='account-drop-down-links'>
                <p onClick={() => {
                    history.push('/cart')
                    setAccountDrop(!accountDrop)
                }}>My Cart</p>
                <p onClick={() => {
                    history.push('/shop');
                    setAccountDrop(!accountDrop)
                }}>Shop</p>
                <p onClick={() => {
                    logout();
                    setAccountDrop(!accountDrop)
                }}>Logout</p></div> : null}
                

            
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

