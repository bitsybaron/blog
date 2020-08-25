import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <Link to='/interviews'><p>Interviews</p></Link>
                <p>Style</p>
                <p>Travel</p>
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