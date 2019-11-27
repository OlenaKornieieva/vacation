import React from 'react';

const SearchPackages = () => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <select className='form-control border-0 rounded-0'>
                        <option value="1">חבילת נופש</option>
                    </select>
                    <span className="input-group-addon btn border-0 rounded-0">
                        :סוג חבילה
                        <i className="fas fa-suitcase pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SearchPackages;