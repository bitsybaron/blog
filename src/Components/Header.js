import React from 'react';
import {Link} from 'react-router-dom';
import Sploosh from '../f1f14569-ef47-4ea7-b386-32f75cf1ca23_200x200.png'

function Header() {
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
                <p >Sign Up</p>
                <p>Cart</p>
            </nav>
            
        </header>
    )
}

export default Header;