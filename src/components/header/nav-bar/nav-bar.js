import React from 'react';

const NavBar = () => {

    const navItems = ['טיסות', 'מלונות', 'השכרת רכב', 'העברות', 'אירועים', 'שייט', 'חבילות נופש', 'טיולים מאורגנים', 'אודות', 'צור קשר'];
    return (
        <ul className='nav nav-pills'>
            {navItems.map((item) => {
                return (
                    <li className='nav-item' key={item}>
                        <span className='nav-link'>{item}</span>
                    </li>
                )
            })}
        </ul>
    )
};

export default NavBar;