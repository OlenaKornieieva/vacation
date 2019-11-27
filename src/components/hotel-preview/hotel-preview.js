import React from 'react';
import './hotel-preview.css';

const HotelPreview = ({id, name, price, stars, location, image, startDate, endDate, selectValue}) => {

    let star = '★';
    let addStars = (stars) => {
        for (let i = 0; i < stars - 1; i++) {
            star += '★';
        }
        return star;
    };

    const sd = new Date(startDate);
    const departure = sd.getUTCDate() + '.' + (sd.getUTCMonth() + 1) + '.' + sd.getUTCFullYear();

    const ed = new Date(endDate);
    const comeBack = ed.getUTCDate() + '.' + (ed.getUTCMonth() + 1) + '.' + ed.getUTCFullYear();

    return (
        <div className='d-flex justify-content-between hotel-preview'>
            <div className='col-sm-3 d-flex flex-column justify-content-center align-items-center line'>
                <h1 className='price m-0'>${price}</h1>
                <span className='price'>מחיר לאדם</span>
                <span className='p-2'>${price * (+selectValue)}<span className='pl-1'>סכ''נ</span></span>
                <button type='button' className='btn details-btn'>פרטים</button>
            </div>
            <div className='d-flex flex-column justify-content-end p-3 hotel-description'>
                <h4 className='d-flex justify-content-end'>
                    {name.toUpperCase()}
                </h4>
                <div className='d-flex justify-content-end'>
                    <div className='d-flex flex-column justify-content-between align-items-end pr-3'>
                        <span className='stars'>{addStars(stars)}</span>
                        <span>{departure}<span className='pl-1 font-weight-bold'>:יציאה</span></span>
                        <span>{comeBack}<span className='pl-1 font-weight-bold'>:חזרה</span></span>
                        <span className='type'>7 לילות | חצי פנסיון | כולל העברות</span>
                    </div>
                    <img src={image}
                         className='image-hotel-preview'
                         alt={name}/>
                </div>
            </div>
        </div>
    )
};

export default HotelPreview;