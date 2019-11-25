import React from 'react';
import NavFooter from "../nav-footer/nav-footer";

const FooterContainer = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 d-flex justify-content-between'>
                    <NavFooter/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 d-flex justify-content-between'>
                    <div>
                        <i className="fab fa-facebook"/>
                        <i className="fab fa-instagram"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fa-google-plus"/>
                    </div>
                    <div>
                        RoundTrip
                        <i className="far fa-copyright"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterContainer;