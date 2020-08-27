import React from 'react';
import {Link} from 'react-router-dom';
import Sploosh from '../f1f14569-ef47-4ea7-b386-32f75cf1ca23_200x200.png'
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../redux/postReducer';
import { useHistory } from "react-router-dom";

import axios from 'axios';


function Header() {
    const state = useSelector((r) => r);
    const dispatch = useDispatch();
    const history = useHistory();
    

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
            <nav>
                <Link className='headLink' to='/interviews'><p >Interviews</p></Link>
                <Link className='headLink' to='/style'><p >Style</p></Link>
                <Link className='headLink' to='/travel'><p >Travel</p></Link>
                <p>Baking</p>



            </nav>
            <Link to='/'><img className="sploosh" src={Sploosh}/></Link>
            <nav>
                <Link className='headLink' to='/contact'><p >Contact</p></Link>
                <Link to='/shop'><p>Shop</p></Link>
                {!state.isLoggedIn ? <Link to='/auth'><p >Sign Up</p></Link> :
                 <p onClick={() => logout()}>Logout</p>}
                <Link to='/cart'><p>Cart</p></Link>
            </nav>
            
        </header>
    )
}

export default Header;

//ADD LOGOUT ONCLICK TO LOGOUT && CREATE LOGOUT FUNCTION