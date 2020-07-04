import React from 'react';
import '../css/Header.css';

function Header(props) {
    return (
        <div className="header">
            <nav>
                <a className="links title" href="#">Hello Benzeman</a>
        <div className="rightSection">
            <a className="selected links" href="#">Home</a>
            <a className="links" href="#">Contact Us</a>
            <a className="links" href="#">About Us</a>
            <a className="links" href="#">More Info</a>
            <a className="links" href="#">Register</a>
             
        </div>
            </nav>
        </div>
    );
}

export default Header;