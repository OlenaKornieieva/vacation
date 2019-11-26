import React from 'react';
import './footer-container.css';
import NavFooter from "../nav-footer/nav-footer";

const FooterContainer = () => {
    return (
        <div>
            <div className='row nav-footer'>
                <div className='col-sm-12 d-flex justify-content-between'>
                    <NavFooter/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 d-flex justify-content-between text-white m-2'>
                    <div className='social-net'>
                        <i className="fab fa-facebook"/>
                        <i className="fab fa-instagram"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fa-google-plus"/>
                    </div>
                    <div className='copyright'>
                        RoundTrip
                        <i className="far fa-copyright px-3"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterContainer;