import React from 'react';
import './search-btn.css';

const SearchBtn = ({hotels, updateHotels, searchQuery}) => {

    const onSearch = () => {
        let displayedHotels = hotels.filter(el => {
            return el.location.toLowerCase().indexOf(searchQuery) !== -1;
        });
        updateHotels({hotels: displayedHotels});
    };

    return (
        <button type='button'
                className='btn search-btn'
                onClick={onSearch}
        >חפש
        </button>
    )
};

export default SearchBtn;