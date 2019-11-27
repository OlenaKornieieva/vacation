import React from 'react';
import './spiner.css';

const Spinner = () => {
    return (
        <div className="row d-flex justify-content-around">
            <div className="lds-css ng-scope">
                <div className="lds-eclipse">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;