import React from 'react';
import './app.css';
import HeaderContainer from "../header/header-container/header-container";
import FilterPanel from "../filter-panel/filter-panel";
import FooterContainer from "../footer/footer-container/footer-container";
import ResultsView from "../results-view/results-view";
import SearchPanelContainer from "../search-panel/search-panel-container/search-panel-container";
import SortPanel from "../sort-panel/sort-panel";
import HotelService from "../services/hotel-service";
import Spinner from "../spiner/spiner";
import ErrorIndicator from "../error-indicator/error-indicator";

class App extends React.Component {

    state = {
        hotels: [],
        error: null,
        startDate: new Date(),
        endDate: new Date(),
        selectValue: '1'
    };

    hotelService = new HotelService();

    componentDidMount() {
        this.hotelService.getHotels().then(hotels => {
            this.initialHotels = hotels.slice();
            this.setState({hotels: this.initialHotels});
        }).catch(error => {
            this.setState({error: error.message})
        })
    }

    updateHotels = (config) => {
        this.setState(config);
    };

    handleDepartureSelect = (date) => {
        this.setState({startDate: date});
    };

    handleReturnSelect = (date) => {
        this.setState({endDate: date});
    };

    handlePassengersChange = (e) => {
        this.setState({selectValue: e.target.value});
    };

    render() {

        const {hotels, error, startDate, endDate, selectValue} = this.state;

        if (hotels.length === 0 && !error) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <div className='app'>
                <HeaderContainer/>
                <SearchPanelContainer
                    hotels={this.initialHotels}
                    updateHotels={this.updateHotels}
                    startDate={startDate}
                    onStartDateSelect={this.handleDepartureSelect}
                    endDate={endDate}
                    onEndDateSelect={this.handleReturnSelect}
                    selectValue={selectValue}
                    onPassengersChange={this.handlePassengersChange}
                />
                <div className='row m-0'>
                    <div className='col-sm-12 p-0 d-flex justify-content-between panels'>
                        <div className='col-sm-8 p-0 m-2'>
                            <SortPanel/>
                            <ResultsView
                                hotels={hotels}
                                startDate={startDate}
                                onStartDateSelect={this.handleDepartureSelect}
                                endDate={endDate}
                                onEndDateSelect={this.handleReturnSelect}
                                selectValue={selectValue}
                                onPassengersChange={this.handlePassengersChange}
                            />
                        </div>
                        <div className='col-sm-3 p-0 m-2'>
                            <FilterPanel/>
                        </div>
                    </div>
                </div>
                <FooterContainer/>
            </div>
        )
    }
}

export default App;