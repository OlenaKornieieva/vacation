import React from 'react';

const Passengers = ({selectValue, onPassengersChange}) => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <select
                        className='form-control border-0 rounded-0'
                        value={selectValue}
                        onChange={onPassengersChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">תינוק + 2</option>
                    </select>
                    <span
                        className="input-group-addon btn border-0 rounded-0">
                        נוסעים
                        <i className="far fa-user pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Passengers;