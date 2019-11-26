import React from 'react';

const SearchBar = ({searchQuery, onCityChoose}) => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <input
                        type="text"
                        className="form-control border-right-0 rounded-0 border-secondary"
                        value={searchQuery}
                        onChange={onCityChoose}
                    />
                    <span className="input-group-addon btn border border-left-0 border-bottom rounded-0 border-secondary">
                        :יעד
                        <i className="fas fa-plane pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;