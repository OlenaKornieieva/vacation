import React from 'react';
import hotels from '../../hotels';
import HotelPreview from "../hotel-preview/hotel-preview";

const ResultsView = () => {
    return (
        <div>
            {hotels.map(item =>
                <HotelPreview key={item.id}
                              name={item.name}
                              price={item.price}
                              stars={item.stars}
                              image={item.image}
                />
            )}
        </div>
    )
};

export default ResultsView;