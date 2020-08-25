import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <Link to='/interviews'><p>Interviews</p></Link>
                <Link to='/style'><p>Style</p></Link>
                <Link to='/travel'><p>Travel</p></Link>
            </nav>
            <Link to='/'><h2>Smidge</h2></Link>
            <nav>
                <Link to='/contact'><p>Contact</p></Link>
                <p>Sign Up</p>
                <img src="https://img.icons8.com/ios/50/000000/favorite-cart.png"/>
            </nav>
        </header>
    )
}

export default Header;