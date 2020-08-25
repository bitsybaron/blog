import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <p>Interviews</p>
                <p>Style</p>
                <p>Travel</p>
            </nav>
            <h2>Smidge</h2>
            <nav>
                <Link to='/contact'><p>Contact</p></Link>
                <p>Sign Up</p>
                <img src="https://img.icons8.com/ios/50/000000/favorite-cart.png"/>
            </nav>
        </header>
    )
}

export default Header;