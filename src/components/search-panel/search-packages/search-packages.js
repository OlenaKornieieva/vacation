import React from 'react';

const SearchPackages = () => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <select className='border-right-0 rounded-0 border-secondary'>
                        <option value="1">חבילת נופש</option>
                    </select>
                    <span className="input-group-addon btn border border-left-0 border-bottom rounded-0 border-secondary">
                        סוג חבילה:
                        <i className="fas fa-suitcase pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SearchPackages;