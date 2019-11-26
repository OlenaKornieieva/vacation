import React from 'react';
import './app.css';
import HeaderContainer from "../header/header-container/header-container";
import FilterPanel from "../filter-panel/filter-panel";
import FooterContainer from "../footer/footer-container/footer-container";
import ResultsView from "../results-view/results-view";
import SearchPanelContainer from "../search-panel/search-panel-container/search-panel-container";
import SortPanel from "../sort-panel/sort-panel";
import hotels from '../../hotels';

class App extends React.Component {

    state = {
        hotels,
        startDate: new Date(),
        endDate: new Date()
    };

    updateHotels = (config) => {
        this.setState(config);
    };

    handleDepartureSelect = (date) => {
        this.setState({startDate: date});
    };

    handleReturnSelect = (date) => {
        this.setState({endDate: date});
    };

    render() {
        return (
            <div>
                <HeaderContainer/>
                <SearchPanelContainer
                    hotels={this.state.hotels}
                    updateHotels={this.updateHotels}
                    startDate={this.state.startDate}
                    onStartDateSelect={this.handleDepartureSelect}
                    endDate={this.state.endDate}
                    onEndDateSelect={this.handleReturnSelect}
                />
                <div className='row m-0'>
                    <div className='col-sm-12 p-0 d-flex justify-content-between'>
                        <div className='col-sm-8 p-0 m-2'>
                            <SortPanel/>
                            <ResultsView
                                hotels={this.state.hotels}
                                startDate={this.state.startDate}
                                onStartDateSelect={this.handleDepartureSelect}
                                endDate={this.state.endDate}
                                onEndDateSelect={this.handleReturnSelect}
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