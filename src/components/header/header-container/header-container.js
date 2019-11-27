import React from 'react';
import NavBar from "../nav-bar/nav-bar";
import './header-container.css';

const HeaderContainer = () => {
    return (
        <div className='row header-container m-0 sticky-top'>
            <div className='col-sm-12 p-0'>
                <div className='d-flex justify-content-between header'>
                    <div className='d-flex align-items-center'>
                        <button type="button" className="btn-currency dropdown-toggle" data-toggle="dropdown">
                            <i className="fas fa-dollar-sign"/>USD
                        </button>
                        <button type='button' className='btn-cart m-1'>
                            <i className="fas fa-shopping-cart"/>
                        </button>
                        <div className='d-flex'>
                            <span className='tel'>1-700-500-477</span>
                            <span className='d-flex align-items-center ml-1 tel-text'>חייגו עכשיב</span>
                        </div>
                    </div>
                    <h1 className='brand'>LetsTravel</h1>
                </div>
                <nav className='header-navbar navbar navbar-expand-lg d-flex justify-content-end'>
                    <NavBar/>
                </nav>
            </div>
        </div>
    )
};

export default HeaderContainer;