import React from 'react';
import './search-panel-container.css';
import SearchBar from "../search-bar/search-bar";
import SearchBtn from "../search-btn/search-btn";
import CalendarDeparture from "../calendar-departure/calendar-departure";
import CalendarReturn from "../calendar-return/calendar-return";
import SearchPackages from "../search-packages/search-packages";
import Passengers from "../passengers/passengers";

class SearchPanelContainer extends React.Component {

    state = {
        searchQuery: ''
    };

    handleCityChoose = (e) => {
        this.setState({searchQuery: e.target.value.toLowerCase()});
    };

    render() {

        const {hotels, updateHotels, startDate, onStartDateSelect, endDate, onEndDateSelect} = this.props;
        const {searchQuery} = this.state;

        return (
            <div className='search-panel'>
                <div className='d-flex justify-content-end checkbox-panel'>
                    <div className="form-check-inline m-0">
                        <label className="form-check-label pr-3">
                            <input type="radio" className="form-check-input" name="optradio"/>חבילות טוס וסע
                        </label>
                    </div>
                    <div className="form-check-inline m-0">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio"/>חבילות נופש
                        </label>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <SearchBtn
                        hotels={hotels}
                        updateHotels={updateHotels}
                        searchQuery={searchQuery}
                    />
                    <Passengers/>
                    <CalendarReturn
                        endDate={endDate}
                        onEndDateSelect={onEndDateSelect}
                    />
                    <CalendarDeparture
                        startDate={startDate}
                        onStartDateSelect={onStartDateSelect}
                    />
                    <SearchBar
                        onCityChoose={this.handleCityChoose}
                        searchQuery={searchQuery}
                    />
                    <SearchPackages/>
                </div>
                <div className='d-flex justify-content-end checkbox-panel'>
                    <div className="form-check-inline m-0">
                        <label className="form-check-label pr-3">
                            <input type="checkbox" className="form-check-input" value=""/>חיפוש גמיש (-/+ יום)
                        </label>
                    </div>
                    <div className="form-check-inline m-0">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value=""/> טיסות ישירות בלבד
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPanelContainer;