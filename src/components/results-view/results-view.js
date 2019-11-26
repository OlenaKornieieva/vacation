import React from 'react';
import HotelPreview from "../hotel-preview/hotel-preview";

const ResultsView = ({hotels, startDate, endDate}) => {

    return (
        <div>
            {hotels.map(item =>
                <HotelPreview key={item.id}
                              name={item.name}
                              price={item.price}
                              stars={item.stars}
                              image={item.image}
                              location={item.location}
                              startDate={startDate}
                              endDate={endDate}
                />
            )}
        </div>
    )
};

export default ResultsView;