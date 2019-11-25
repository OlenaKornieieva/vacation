import React from 'react';
import NavBar from "../nav-bar/nav-bar";

const HeaderContainer = () => {
    return (
        <div className='row header'>
            <div className='col-sm-12'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            <i className="fas fa-dollar-sign"/>USD
                        </button>
                        <button>
                            <i className="fas fa-shopping-cart"/>
                        </button>
                        <span>
                            <span>1-700-500-477</span>
                            <span>חייגו עכשיב</span>
                        </span>
                    </div>
                    <div>LetsTravel</div>
                </div>
                <NavBar/>
            </div>
        </div>
    )
};

export default HeaderContainer;