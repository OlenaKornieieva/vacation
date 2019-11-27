import React from 'react';

const SearchBar = ({searchQuery, onCityChoose}) => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <input
                        type="text"
                        className="form-control border-0 rounded-0"
                        value={searchQuery}
                        onChange={onCityChoose}
                    />
                    <span className="input-group-addon btn border-0 rounded-0">
                        :יעד
                        <i className="fas fa-plane pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;