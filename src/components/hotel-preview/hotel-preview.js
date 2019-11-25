import React from 'react';
import './hotel-preview.css';

const HotelPreview = ({id, name, price, stars, image}) => {
    return (
        <div className='row'>
            <div className='col-sm-9 d-flex justify-content-between'>
                <div className='d-flex flex-column justify-content-between line'>
                    <span>
                        <i className="fas fa-dollar-sign"/>{price}
                    </span>
                    <span>מחיר לאדם</span>
                    <span>${price * 2}סכ''נ </span>
                    <button type='button' className='btn btn-success'>פרטים</button>
                </div>
                <div className='d-flex flex-column justify-content-end'>
                    <div className='d-flex justify-content-end'>
                    {name}
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='d-flex flex-column justify-content-between'>
                            {stars}<i className="fas fa-star"/>
                            <span>יציאה:</span>
                            <span>חזרה:</span>
                            <span>7 לילות | חצי פנסיון | כולל העברות</span>
                        </div>
                        <img src={image}
                             className='image-hotel-preview'
                             alt={name}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HotelPreview;