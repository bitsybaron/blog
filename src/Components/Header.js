import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Sploosh from '../f1f14569-ef47-4ea7-b386-32f75cf1ca23_200x200.png'
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../redux/authReducer';
import { useHistory } from "react-router-dom";

import axios from 'axios';


function Header() {
    const state = useSelector((r) => r.authReducer);
    const cart = useSelector((r) => r.reducer)
    const dispatch = useDispatch();
    const history = useHistory();
    const {userId} = state.user
    const [cartQuant, setcartQuant] = useState(0);
    

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
            <nav>
                <p>About</p>
                <Link className='headLink' to='/interviews'><p >Interviews</p></Link>
                <Link className='headLink' to='/style'><p >Style</p></Link>
                <Link className='headLink' to='/travel'><p >Travel</p></Link>



            </nav>
            <Link to='/'><img className="sploosh" src={Sploosh}/></Link>
            <nav>
                
                <Link to='/shop'><p>Shop</p></Link>
                {!state.isLoggedIn ? <Link to='/auth'><p >Sign Up</p></Link> :
                 <p onClick={() => logout()}>Logout</p>}
                <Link to='/cart'><p>Cart({cartQuant})</p></Link>
            </nav>
            
        </header>
    )
}

export default Header;

