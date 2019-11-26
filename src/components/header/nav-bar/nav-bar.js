import React from 'react';
import './nav-bar.css';

const NavBar = () => {

    const navItems = ['טיסות', 'מלונות', 'השכרת רכב', 'העברות', 'אירועים', 'שייט', 'חבילות נופש', 'טיולים מאורגנים', 'אודות', 'צור קשר'];

    return (
        <ul className='navbar-nav'>
            {navItems.map((item) => {
                return (
                    <li className='nav-item header-nav-item' key={item}>
                        <span className='nav-link'>{item}</span>
                    </li>
                )
            })}
        </ul>
    )
};

export default NavBar;