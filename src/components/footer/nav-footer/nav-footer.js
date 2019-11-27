import React from 'react';
import './nav-footer.css';

const NavFooter = () => {

    const navTrips = ['טיולים מאורגנים לאירופה', 'טיולים מאורגנים למזרח', 'טיולים מאורגנים לאפריקה', 'טיולים מאורגנים לדרום אמריקה', 'טיולים מאורגנים עם ילדימ'];
    const navCarRental = ['השנרת רנב בגרמניה', 'השנרת רנב בספרד', 'השנרת רנב באנגליה', 'השנרת רנב בהולנד', 'השנרת רנב בארה"ב'];
    const navVacationPackages = ['חבילות נופש לבטומי', 'חבילות נופש לזנזיבר', 'חבילות נופש לסיצילה', 'חבילות נופש למלתה', 'חבילות נופש לברצלונה', 'חבילות נופש לפראג', 'חבילות נופש לבודפשט', 'חבילות נופש לאמסטרדם', 'חבילות נופש לולנסיה'];
    const navHotels = ['מלונות בברצלונה', 'מלונות באמסטרדם', 'מלונות בלונדון', 'מלונות בניומיורק', 'מלונות בפראג', 'מלונות ברומא'];
    const navFlights = ['טיסות לחו"ל', 'טיסות לואו קוסט', 'טיסות זולות', 'טיסות לתאילנד', 'טיסות לברזיל', 'טיסות לברצלונה', 'טיסות ללונדון', 'טיסות לניו יורק', 'טיסות לפאריס', 'טיסות לאמסטרדם', 'טיסות לרומא'];

    return (
        <div className='col-sm-12 d-flex justify-content-between align-items-start pt-4 nav-container'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <h5 className='d-flex justify-content-end align-self-end'>טיולים מאורגנים</h5>
                    {navTrips.map(item => {
                        return (
                            <li className='nav-item d-flex justify-content-end' key={item}>
                                <span className='nav-link'>
                                    {item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <h5 className='d-flex justify-content-end align-self-end'>השנרת רנב</h5>
                    {navCarRental.map(item => {
                        return (
                            <li className='nav-item d-flex justify-content-end' key={item}>
                                <span className='nav-link'>
                                    {item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <h5 className='d-flex justify-content-end align-self-end'>חבילות נופש</h5>
                    {navVacationPackages.map(item => {
                        return (
                            <li className='nav-item d-flex justify-content-end' key={item}>
                                <span className='nav-link'>
                                    {item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <h5 className='d-flex justify-content-end align-self-end'>מלונות</h5>
                    {navHotels.map(item => {
                        return (
                            <li className='nav-item d-flex justify-content-end' key={item}>
                                <span className='nav-link'>
                                    {item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <h5 className='d-flex justify-content-end align-self-end'>טיסות</h5>
                    {navFlights.map(item => {
                        return (
                            <li className='nav-item d-flex justify-content-end' key={item}>
                                <span className='nav-link'>
                                    {item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
};

export default NavFooter;