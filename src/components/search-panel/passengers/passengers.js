import React from 'react';

const Passengers = () => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <select className='border-right-0 rounded-0 border-secondary'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">תינוק + 2</option>
                    </select>
                    <span
                        className="input-group-addon btn border border-left-0 border-bottom rounded-0 border-secondary">
                        נוסעים
                        <i className="far fa-user pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Passengers;